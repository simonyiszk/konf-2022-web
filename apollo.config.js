module.exports = {
	client: {
		name: "konf-2022-web",
		tagName: "graphql",
		includes: [
			"./src/**/*.{ts,tsx}",
			"./src/@types/__generated__/gatsby-plugin-documents.graphql",
		],
		service: {
			name: "GatsbyJS",
			localSchemaFile: "./src/@types/__generated__/gatsby-schema.graphql",
		},
	},
};
