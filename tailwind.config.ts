import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wild-sand': '#F5F5F5',
        ebony: '#0f1626',
        'sunset-orange': '#ff533d',
        sandrift: '#ab987a',
      },
    },
  },
  plugins: [],
};
export default config;
