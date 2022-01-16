const aspectRatio = require("@tailwindcss/aspect-ratio");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx,scss}"],
	theme: {
		extend: {},
	},
	plugins: [aspectRatio],
};
