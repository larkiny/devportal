# Algorand Shared Theme

Shared Starlight theme for Algorand Developer Portal microsites.

## Installation

This package is part of the Algorand Developer Portal monorepo. To use it in a microsite:

```json
{
  "dependencies": {
    "@algorand/shared-theme": "workspace:*"
  }
}
```

## Usage

### As a Starlight Plugin

The easiest way to use the shared theme is as a Starlight plugin:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import algorandTheme from '@algorand/shared-theme';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Your Microsite',
      plugins: [algorandTheme()],
      // ... other config
    }),
  ],
});
```

This automatically configures:
- Custom Header, Footer, Hero, and SiteTitle components
- Algorand brand fonts (Aeonik, Inter, Source Code Pro)
- Global styles and theme colors
- Light/dark theme support

### Manual Component Imports

You can also import individual components:

```astro
---
import { LinkInfoCard, IconCard } from '@algorand/shared-theme';
import { HomepageHero } from '@algorand/shared-theme';
---

<HomepageHero />
<LinkInfoCard title="..." />
```

### Manual Style Imports

**Important**: The shared theme provides only theme variables and custom styles. You must import Tailwind CSS yourself in your microsite.

Create a site-specific CSS file (e.g., `src/styles/site.css`) that imports Tailwind first, then the shared theme:

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

Then reference it in your `astro.config.mjs`:

```js
starlight({
  customCss: ['./src/styles/site.css'],
})
```

## Package Structure

```
@algorand/shared-theme/
├── components/          # Shared Astro components
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── ThemeSelect.astro
│   └── homepage/        # Homepage-specific components
├── styles/              # Global CSS
│   ├── fonts.css
│   └── global.css
├── assets/              # Fonts and images
│   ├── fonts/
│   └── images/
└── index.ts             # Main entry point
```

## Customization

While the shared theme provides consistent branding, individual microsites can:

1. **Override components**: Pass custom components to Starlight config
2. **Extend styles**: Add custom CSS after the shared theme
3. **Use theme variables**: Leverage CSS custom properties for colors, fonts, etc.

## Development

When developing the shared theme, changes are immediately reflected in all microsites due to pnpm workspace linking.

## License

MIT
