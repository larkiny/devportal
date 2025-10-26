import type { StarlightPlugin } from '@astrojs/starlight/types';

/**
 * Algorand Shared Theme Plugin for Starlight
 *
 * This plugin provides shared theme components, styles, and assets
 * for Algorand Developer Portal microsites.
 */
export default function algorandThemePlugin(): StarlightPlugin {
  return {
    name: '@algorand/shared-theme',
    hooks: {
      setup({ addIntegration, config, logger, updateConfig }) {
        logger.info('Loading Algorand shared theme...');

        // Update Starlight config to use custom components
        updateConfig({
          components: {
            Footer: './node_modules/@algorand/shared-theme/components/Footer.astro',
            Header: './node_modules/@algorand/shared-theme/components/Header.astro',
            Hero: './node_modules/@algorand/shared-theme/components/Hero.astro',
            SiteTitle: './node_modules/@algorand/shared-theme/components/SiteTitle.astro',
            ThemeProvider: './node_modules/@algorand/shared-theme/components/CustomThemeProvider.astro',
            ThemeSelect: './node_modules/@algorand/shared-theme/components/ThemeSelect.astro',
          },
          // Inject shared styles
          customCss: [
            './node_modules/@algorand/shared-theme/styles/fonts.css',
            './node_modules/@algorand/shared-theme/styles/global.css',
            ...(config.customCss || []),
          ],
        });
      },
    },
  };
}

// Export commonly used components for direct import
export { default as Footer } from './components/Footer.astro';
export { default as Header } from './components/Header.astro';
export { default as Hero } from './components/Hero.astro';
export { default as SiteTitle } from './components/SiteTitle.astro';
export { default as ThemeSelect } from './components/ThemeSelect.astro';
export { default as CustomThemeProvider } from './components/CustomThemeProvider.astro';

// Export shared components
export { default as Figure } from './components/Figure.astro';
export { default as DropDown } from './components/DropDown.astro';
export { default as LinkInfoCard } from './components/LinkInfoCard.astro';
export { default as LinkInfoCardGrid } from './components/LinkInfoCardGrid.astro';
export { default as RemoteCode } from './components/RemoteCode.astro';
export { default as RemoteMarkdown } from './components/RemoteMarkdown.astro';
export { default as SocialIcons } from './components/SocialIcons.astro';

// Export utilities
export * from './components/Icons';
