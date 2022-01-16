const siteMetadata = {
	title: `XIX. Simonyi Konferencia`,
	description: `Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai konferenciája.`,
	author: `@simonyikonf`,
	siteUrl: `https://konferencia.simonyi.bme.hu`,
	image: `/preview.png`,
	favicon: `/favicon.png`,
};

module.exports = {
	siteMetadata,
	plugins: [
		/** Contentful types */
		{
			resolve: `gatsby-plugin-typegen`,
			options: {
				outputPath: `src/@types/__generated__/gatsby-types.ts`,
			},
		},

		/** React Helmet */
		`gatsby-plugin-react-helmet`,

		`gatsby-plugin-sass`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-tsconfig-paths`,
	],
};
