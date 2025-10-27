import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://arcs.algorand.co',
  description:
    'Algorand Request for Comments (ARCs) - Technical standards for the Algorand ecosystem',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'Algorand ARCs',
      description:
        'Algorand Request for Comments (ARCs) - Technical standards for the Algorand ecosystem',
      components: {
        Footer: '@algorand/shared-theme/components/Footer.astro',
        Header: '@algorand/shared-theme/components/Header.astro',
        SiteTitle: '@algorand/shared-theme/components/SiteTitle.astro',
        ThemeProvider: '@algorand/shared-theme/components/CustomThemeProvider.astro',
        ThemeSelect: '@algorand/shared-theme/components/ThemeSelect.astro',
      },
      logo: {
        light: '/src/assets/images/algorand-logomark-blue-RGB.png',
        dark: '/src/assets/images/algorand-logomark-teal-RGB.png',
        alt: 'Algorand ARCs',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/algorandfoundation/arcs' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/algorand' },
      ],
      favicon: '/favicon.png',
      customCss: ['./src/styles/site.css'],
      sidebar: [
        {
          label: 'ARC Standards',
          autogenerate: { directory: '/' },
        },
      ],
    }),
  ],
});
