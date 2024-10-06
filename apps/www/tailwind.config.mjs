/** @type {import('tailwindcss').Config} */
//import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import baseConfig from "@acme/tailwind-config/web";

export default {
  content: [
    ...baseConfig.content,
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    "../../packages/ui/**/*.{ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
}
