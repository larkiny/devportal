#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import 'dotenv/config';

const execAsync = promisify(exec);

const inputDir = path.resolve(process.cwd(), 'src/assets/diagrams/d2');
const outputDir = path.resolve(process.cwd(), 'src/assets/diagrams/svg');

async function generateDiagrams() {
  try {
    await fs.mkdir(outputDir, { recursive: true });

    const files = await fs.readdir(inputDir);
    const d2Files = files.filter(file => file.endsWith('.d2'));

    console.log(`Found ${d2Files.length} .d2 files to process...`);

    for (const file of d2Files) {
      const baseName = path.basename(file, '.d2');
      const inputFilePath = path.join(inputDir, file);
      const outputFilePath = path.join(outputDir, `${baseName}.svg`);

      let shouldRegenerate = true;
      try {
        const outputStat = await fs.stat(outputFilePath);
        const inputStat = await fs.stat(inputFilePath);

        // Compare modification times
        // Only regenerate if input file is newer than output file
        if (inputStat.mtime <= outputStat.mtime) {
          console.log(`Skipping ${file} - SVG is up to date`);
          shouldRegenerate = false;
        }
      } catch (e) {
        console.error(e);
        // If error occurs (likely output file doesn't exist), we should regenerate
        shouldRegenerate = true;
      }

      if (shouldRegenerate) {
        console.log(`Processing ${file}...`);
        try {
          await execAsync(`d2 '${inputFilePath}' '${outputFilePath}'`);
          console.log(`Successfully generated ${outputFilePath}`);
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
        }
      }
    }

    console.log('All diagrams processed successfully!');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

generateDiagrams();
