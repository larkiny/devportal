#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import os from 'os';
import 'dotenv/config';

const execAsync = promisify(exec);

// Define API endpoints and Markdown output
const apiDocs = [
  {
    name: 'algod',
    schemaUrl:
      'https://raw.githubusercontent.com/algorand/go-algorand/refs/heads/master/daemon/algod/api/algod.oas3.yml',
    outputFile: path.resolve(
      process.cwd(),
      'src/content/docs/reference/rest-api/algod.md',
    ),
    pageTitle: 'Algod API',
  },
  {
    name: 'indexer',
    schemaUrl:
      'https://raw.githubusercontent.com/algorand/indexer/refs/heads/main/api/indexer.oas3.yml',
    outputFile: path.resolve(
      process.cwd(),
      'src/content/docs/reference/rest-api/indexer.md',
    ),
    pageTitle: 'Indexer API',
  },
  {
    name: 'kmd',
    schemaUrl:
      'https://raw.githubusercontent.com/algorand/go-algorand/ad578576ab5f5bfe58a590164903617ecef379e4/daemon/kmd/api/swagger.json',
    outputFile: path.resolve(
      process.cwd(),
      'src/content/docs/reference/rest-api/kmd.md',
    ),
    pageTitle: 'KMD API',
  },
];

async function downloadSchema(url: string): Promise<string> {
  console.log(`Fetching OpenAPI schema from ${url}...`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  return response.text();
}

async function sortMarkdownFile(filePath: string) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');

    // Split the content by H1 sections (keeping H1 headers)
    const h1Sections = content
      .split(/^# /gm)
      .map((section, index) => (index === 0 ? section : `# ${section}`));

    const sortedH1Sections = h1Sections.map(h1Section => {
      // Split each H1 section into H2 sections
      const h2Sections = h1Section
        .split(/^## /gm)
        .map((section, index) => (index === 0 ? section : `## ${section}`));

      // Sort H3 inside each H2 section
      const sortedH2Sections = h2Sections.map(h2Section => {
        const h3Sections = h2Section
          .split(/^### /gm)
          .map((section, index) => (index === 0 ? section : `### ${section}`));

        // Sort H3 headers but keep the first part intact
        const firstPartH3 = h3Sections.shift();
        const sortedH3Sections = h3Sections.sort((a, b) => {
          const titleA = a.split('\n')[0].trim().toLowerCase();
          const titleB = b.split('\n')[0].trim().toLowerCase();
          return titleA.localeCompare(titleB);
        });

        return [firstPartH3, ...sortedH3Sections].join('\n');
      });

      // Sort H2 headers but keep the first part intact
      const firstPartH2 = sortedH2Sections.shift();
      const sortedH2Final = sortedH2Sections.sort((a, b) => {
        const titleA = a.split('\n')[0].trim().toLowerCase();
        const titleB = b.split('\n')[0].trim().toLowerCase();
        return titleA.localeCompare(titleB);
      });

      return [firstPartH2, ...sortedH2Final].join('\n');
    });

    // Reconstruct and write back the sorted Markdown content
    const sortedContent = sortedH1Sections.join('\n');
    await fs.writeFile(filePath, sortedContent, 'utf-8');
    console.log(`✅ Sorted H1, H2, and H3 headers in ${filePath}`);
  } catch (error) {
    console.error(`❌ Error sorting ${filePath}:`, error);
  }
}

async function addTitleToMarkdown(filePath: string, title: string) {
  try {
    let content = await fs.readFile(filePath, 'utf-8');

    // Ensure title is added properly
    const titleBlock = `---\ntitle: ${title}\n---\n\n`;
    content = titleBlock + content;

    await fs.writeFile(filePath, content, 'utf-8');
    console.log(`✅ Added title to ${filePath}`);
  } catch (error) {
    console.error(`❌ Error adding title to ${filePath}:`, error);
  }
}

async function groupMarkdownSections(filePath: string) {
  try {
    let content = await fs.readFile(filePath, 'utf-8');

    // Convert all `##` API methods to `###` (nesting them properly)
    //
    content = content.replace(/<h1[^>]*>(.*?)<\/h1>/, '');
    content = content.replace(/^# You can also use wget$/gm, '');
    content = content.replace(/<h1[^>]*>(.*?)<\/h1>/g, '# $1');
    content = content.replace(/<h2[^>]*>(.*?)<\/h2>/g, '## $1');
    content = content.replace(/<h3[^>]*>(.*?)<\/h3>/g, '### $1');

    content = content.replace(/^### /gm, '#### ');
    content = content.replace(/^## /gm, '### ');
    content = content.replace(/^# /gm, '## ');
    await fs.writeFile(filePath, content, 'utf-8');
    console.log(
      `✅ Grouped multiple <h1> sections as TOC headers in ${filePath}`,
    );
  } catch (error) {
    console.error(`❌ Error grouping sections in ${filePath}:`, error);
  }
}

async function generateDocs() {
  try {
    await fs.mkdir(path.dirname(apiDocs[0].outputFile), { recursive: true });

    for (const { name, schemaUrl, outputFile, pageTitle } of apiDocs) {
      const tempSchemaFile = path.join(
        os.tmpdir(),
        `${name}-${Date.now()}.yml`,
      );

      try {
        console.log(`Generating Markdown for ${name}...`);

        // Fetch OpenAPI schema and save it to a temp file
        const schemaContent = await downloadSchema(schemaUrl);
        await fs.writeFile(tempSchemaFile, schemaContent, 'utf-8');

        // Run Widdershins with collapsible TOC enabled
        await execAsync(
          `npx widdershins --omitHeader true ${tempSchemaFile} -o ${outputFile}`,
        );

        // Add custom title block
        await addTitleToMarkdown(outputFile, pageTitle);
        await groupMarkdownSections(outputFile);
        await sortMarkdownFile(outputFile);
        // Group sections using <h1> for TOC structure
        // await groupMarkdownSections(outputFile);

        // Sort the generated Markdown
        // await sortMarkdownFile(outputFile);
        // await sortH3Headers(outputFile);
        console.log(
          `✅ Successfully generated, titled, sorted, and grouped ${outputFile}`,
        );
      } catch (err) {
        console.error(`❌ Error generating docs for ${name}:`, err);
      } finally {
        // Ensure the temp file is deleted
        try {
          await fs.unlink(tempSchemaFile);
          console.log(`🗑️ Deleted temporary file: ${tempSchemaFile}`);
        } catch (cleanupError) {
          console.error(
            `⚠️ Error deleting temporary file: ${tempSchemaFile}`,
            cleanupError,
          );
        }
      }
    }

    console.log('✅ All documentation processed successfully!');
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
}

generateDocs();
