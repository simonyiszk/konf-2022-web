module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx,scss}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#034b63",
					200: "#d0eaeb",
				},
			},
			fontFamily: {
				dongle: ["Dongle", "sans-serif"],
			},
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
	],
};
