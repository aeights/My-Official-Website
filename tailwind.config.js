/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          base: '#F1EFEF',
        },
        secondary: {
          base: '#272829',
        },
        tertiary: {
          base: '#D2E603',
          hover: '#929F0B',
        },
        quinary: {
          base: '#3D3E42',
        },
      },
    },
  },
  plugins: [],
}
