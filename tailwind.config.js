const aspectRatio = require("@tailwindcss/aspect-ratio");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx,scss}"],
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
	plugins: [aspectRatio],
};
