import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        primarydark: 'var(--aw-color-primary-dark)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        highlight: 'var(--aw-color-highlight)',
        highlightmuted: 'var(--aw-color-highlight-muted)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: '"Gotham SSm A", "Gotham SSm B", Arial, Helvetica, sans-serif',
        serif: ['Georgia', ...defaultTheme.fontFamily.serif],
        heading: '"Gotham SSm A", "Gotham SSm B", Arial, Helvetica, sans-serif',
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
