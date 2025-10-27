import {
    convertH1ToFrontmatter,
    removeLine,
    stripLinkExtensions,
} from './src/transformers';
import {
    processDirectories,
    processFile
} from './src/functions';
import { fileURLToPath } from 'url';
import path from 'path';

const scriptLocation = path.dirname(fileURLToPath(import.meta.url));

// AlgoKit TypeScript Testing
await processDirectories([
    {
        src: scriptLocation + '/../repos/algorand-typescript-testing/docs/testing-guide',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            removeLine("For detailed method signatures, parameters, and return types, refer to the following API sections:"),
            removeLine("- [`ContractContext`](../code/subcontexts/contract-context/classes/ContractContext)"),
            removeLine("- [`LedgerContext`](../code/subcontexts/ledger-context/classes/LedgerContext)"),
            removeLine("- [`TransactionContext`](../code/subcontexts/transaction-context/classes/TransactionContext)"),
            removeLine("- [`AvmValueGenerator`, `TxnValueGenerator`, `Arc4ValueGenerator`](../api)"),
            removeLine("For a full list of all public `algorand-typescript` types and their corresponding implementation category, refer to the [Coverage](../coverage) section.")
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/unit-testing/typescript'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../../src/content/docs/algokit/unit-testing/typescript/index.md',
        transformations: [],
        dest: scriptLocation + '/../../src/content/docs/algokit/unit-testing/typescript/overview.md'
    },
]);

// AlgoKit Python Testing
await processDirectories([
    {
        src: scriptLocation + '/../repos/algorand-python-testing/docs/testing-guide',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
        ],
        dest: scriptLocation + '/../../src/content/docs/algokit/unit-testing/python'
    },
]);
await processFile([
    {
        src: scriptLocation + '/../../src/content/docs/algokit/unit-testing/python/index.md',
        transformations: [],
        dest: scriptLocation + '/../../src/content/docs/algokit/unit-testing/python/overview.md'
    },
]);