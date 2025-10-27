# Developer Portal

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Architecture

This project uses a **pnpm workspaces monorepo** architecture to support multiple documentation microsites with shared theme and components.

### Monorepo Structure

```
algorand-devportal/
├── packages/
│   └── shared-theme/           # Shared Starlight theme package
│       ├── components/         # Reusable Astro components
│       ├── styles/            # Global CSS & fonts
│       └── assets/            # Brand fonts & images
├── sites/
│   └── main/                  # Main documentation site
│       ├── src/content/docs/  # Documentation content
│       ├── imports/           # External repo imports
│       ├── scripts/           # Build scripts
│       └── astro.config.mjs   # Astro configuration
├── pnpm-workspace.yaml        # Workspace configuration
├── package.json               # Root package.json
└── tsconfig.json             # Root TypeScript config
```

## Prerequisites

- [Node.js](https://nodejs.org/en) (>= 18)
- [d2lang](https://github.com/terrastruct/d2/blob/master/docs/INSTALL.md)
- [pnpm](https://pnpm.io) (^10.6.3)

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/algorandfoundation/devportal.git
   cd devportal
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

The main site will be available at `http://localhost:4321`

See how to submit changes in the [CONTRIBUTING](./CONTRIBUTING.md) guide.

## Working with the Monorepo

### Main Site (`sites/main/`)

The main documentation site contains all current content and is located in `sites/main/`.

**Key directories:**
- `sites/main/src/content/docs/` - All documentation content
- `sites/main/src/assets/` - Site-specific assets
- `sites/main/public/` - Static files (favicons, fonts, etc.)
- `sites/main/imports/` - External repository imports
- `sites/main/scripts/` - Build and generation scripts

**Configuration:**
- `sites/main/astro.config.mjs` - Astro & Starlight configuration
- `sites/main/auto-sidebar-config.yml` - Sidebar auto-generation config

### Shared Theme Package (`packages/shared-theme/`)

The shared theme package provides reusable components, styles, and assets for all microsites.

**Contents:**
- **Components** - Header, Footer, Hero, ThemeSelect, and more
- **Styles** - Global CSS, Algorand brand colors, Tailwind configuration
- **Assets** - Brand fonts (Aeonik, Inter, Source Code Pro) and logos

The main site imports from this package via:
```astro
---
// Import components from shared theme
import { LinkInfoCard, HomepageHero } from '@algorand/shared-theme';
---
```

### Images/Assets

- **Shared assets**: `packages/shared-theme/assets/` (fonts, brand images)
- **Site-specific assets**: `sites/main/src/assets/images/`
- **Static assets**: `sites/main/public/` (favicons, etc.)

You can use the alias `@images` to reference images in markdown:
```markdown
![Example](@images/smart-contract-workflow.png)
```

SVG icons must go into `sites/main/src/icons` to be used with the `astro-icon` component. You can also use any icon from the [Iconify collection](https://github.com/natemoo-re/astro-icon?tab=readme-ov-file#iconify-icons).

### Styling

The project uses **Tailwind CSS v4** with the Starlight integration.

- **Shared styles**: `packages/shared-theme/styles/`
  - `global.css` - Algorand brand colors, theme variables, Tailwind config
  - `fonts.css` - Font face declarations

- **Custom CSS**: To add custom styles, edit:
  - `packages/shared-theme/styles/global.css` (affects all sites)
  - `sites/main/astro.config.mjs` customCss array (site-specific)

## Development Commands

All commands are run from the **root** of the project:

### Monorepo Commands

| Command                | Action                                              |
| :--------------------- | :-------------------------------------------------- |
| `pnpm install`         | Install all workspace dependencies                  |
| `pnpm dev`             | Start main site dev server at `localhost:4321`      |
| `pnpm dev:main`        | Start main site dev server (alias)                  |
| `pnpm build`           | Build the main site to `sites/main/dist/`           |
| `pnpm build:all`       | Build all sites in the workspace                    |
| `pnpm lint`            | Lint all packages and sites                         |
| `pnpm lint:fix`        | Fix linting issues across workspace                 |

### Main Site Commands

To run commands specifically for the main site:

| Command                                      | Action                                  |
| :------------------------------------------- | :-------------------------------------- |
| `pnpm --filter algorand-devportal-main dev`  | Start main site dev server              |
| `pnpm --filter algorand-devportal-main build`| Build main site                         |
| `pnpm --filter algorand-devportal-main preview` | Preview main site build              |

You can also navigate to `sites/main/` and run commands directly:
```bash
cd sites/main
pnpm dev          # Start dev server
pnpm build        # Build site
pnpm preview      # Preview build
```

## External Content Import

The main site imports documentation from external repositories (AlgoKit CLI, AlgoKit Utils, etc.).

### Import Commands

Run from `sites/main/`:

| Command                  | Action                                        |
| :----------------------- | :-------------------------------------------- |
| `pnpm run import`        | Initialize and import from all submodules     |
| `pnpm run import:all`    | Import from GitHub with latest content        |
| `pnpm run import:force`  | Force re-import (ignores cache)               |
| `pnpm run clean:all`     | Remove all imported content                   |

**Note**: Importing requires setting `IMPORT_GITHUB=true` and optionally a `GITHUB_TOKEN` for rate limiting.

## Creating a New Microsite

To add a new microsite (e.g., for AlgoKit Utils TypeScript):

1. **Create the site directory**:
   ```bash
   mkdir -p sites/algokit-utils-ts
   ```

2. **Add `package.json`**:
   ```json
   {
     "name": "algokit-utils-ts-docs",
     "version": "0.1.0",
     "private": true,
     "dependencies": {
       "@algorand/shared-theme": "workspace:*",
       "@astrojs/starlight": "^0.36.0",
       "astro": "^5.14.4"
     }
   }
   ```

3. **Create `src/styles/site.css`** that imports Tailwind and shared theme:
   ```css
   /* src/styles/site.css */
   @layer theme, base, components, utilities;

   /* Import Tailwind CSS v4 */
   @import 'tailwindcss/theme.css' layer(theme);
   @import 'tailwindcss/utilities.css' layer(utilities);
   @import '@astrojs/starlight-tailwind';

   /* Import shared theme */
   @import '@algorand/shared-theme/styles/fonts.css';
   @import '@algorand/shared-theme/styles/global.css';
   ```

4. **Create `astro.config.mjs`** to use the shared theme:
   ```js
   import { defineConfig } from 'astro/config';
   import starlight from '@astrojs/starlight';

   export default defineConfig({
     integrations: [
       starlight({
         title: 'AlgoKit Utils TypeScript',
         components: {
           Footer: '@algorand/shared-theme/components/Footer.astro',
           Header: '@algorand/shared-theme/components/Header.astro',
           // ... other shared components
         },
         customCss: ['./src/styles/site.css'],
       }),
     ],
   });
   ```

5. **Copy fonts to public directory**:
   ```bash
   mkdir -p sites/algokit-utils-ts/public/fonts
   cp packages/shared-theme/assets/fonts/* sites/algokit-utils-ts/public/fonts/
   ```

6. **Add convenience scripts to root `package.json`**:
   ```json
   {
     "scripts": {
       "dev:utils-ts": "pnpm --filter algokit-utils-ts-docs dev"
     }
   }
   ```

See `packages/shared-theme/README.md` for detailed usage of the shared theme package.

## Useful Links

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Contributing Guide](./CONTRIBUTING.md)
