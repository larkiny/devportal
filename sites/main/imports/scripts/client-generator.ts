import path from "path";
import { processFile } from "./src/functions";
import { fileURLToPath } from "url";
import {
    convertH1ToFrontmatter,
    stripLinkExtensions,
    replaceTitleColon,
    lowercaseInternalLinks,
} from './src/transformers';

const scriptLocation = path.dirname(fileURLToPath(import.meta.url));

// Typescript
await processFile([
    {
        src: scriptLocation + '/../repos/algokit-client-generator-ts/docs/usage.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/client-generator/typescript.md'
    },
]);

// Python
await processFile([
    {
        src: scriptLocation + '/../repos/algokit-client-generator-py/docs/usage.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/client-generator/python.md'
    },
]);