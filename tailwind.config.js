import animatePlugin from 'tailwindcss-animate';
import { tailwindPlugin } from './src/lib';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./src/**/*.{js,jsx,mdx}'],
  plugins: [tailwindPlugin, animatePlugin],
};

module.exports = tailwindConfig;
