/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				pop: ["Poppins", "sans-serif"],
			},
			colors: {
				primary: "#3D5424",
				secondary: "#AFC114",
				tertiary: "#5B852C",
			}
		},
	},
	plugins: [],
}
