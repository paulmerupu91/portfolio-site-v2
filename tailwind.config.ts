import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
    darkMode: 'class',
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			spacing: {
				"128": "32rem",
				"144": "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			sky: colors.sky,
			indigo: colors.indigo,
			yellow: colors.yellow,
			slate: colors.slate,
			green: colors.green,
			blue: "#1fb6ff",
			purple: "#7e5bef",
			pink: "#ff49db",
			orange: "#ff7849",
			"gray-dark": "#273444",
			"gray-light": "#d3dce6",
		},
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
	},
	plugins: [],
};
export default config;
