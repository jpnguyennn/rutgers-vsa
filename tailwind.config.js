/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				"home-hero":
					"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/hero.png')",
				"vcdc-hero":
					"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/vcdc-hero.jpg')",
			},
		},
		fontFamily: {
			titles: ["var(--font-playfair-display)", "serif"],
			"lesser-titles": ["var(--font-lato)", "sans-serif"],
			"board-name": ["var(--font-windsong)", "monospace"],
		},
		screens: {
			phone: { max: "640px" },
			tablet: { max: "1007px" },
		},
	},
	plugins: [],
	images: {
		loader: "cloudinary",
		path: "https://res.cloudinary.com/rutgers-vsa/",
	},
};
