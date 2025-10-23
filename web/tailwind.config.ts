import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f3ff',
          100: '#e6e7ff',
          200: '#c9cafc',
          300: '#a9aaf5',
          400: '#8f8cec',
          500: '#6f69e0',
          600: '#554fc4',
          700: '#3f3aa1',
          800: '#2c2879',
          900: '#1d1b51',
        },
      },
      boxShadow: {
        card: '0 20px 50px -25px rgba(111, 105, 224, 0.45)',
      },
    },
  },
  plugins: [],
};

export default config;
