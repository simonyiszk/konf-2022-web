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
		// {
		// 	resolve: `gatsby-plugin-typegen`,
		// 	options: {
		// 		outputPath: `src/@types/__generated__/gatsby-types.ts`,
		// 	},
		// },

		/** React Helmet */
		`gatsby-plugin-react-helmet`,

		`gatsby-plugin-sass`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-tsconfig-paths`,

		/** Google tag manager */
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-MDDNSN6",

				/// Include GTM in development.
				///
				/// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				/// datalayer to be set before GTM is loaded
				/// should be an object or a function that is executed in the browser
				///
				/// Defaults to null
				defaultDataLayer: { platform: "gatsby" },

				/// Specify optional GTM environment details.
				// gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
				// gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
				// dataLayerName: "YOUR_DATA_LAYER_NAME",

				/// Name of the event that is triggered
				/// on every Gatsby route change.
				///
				/// Defaults to gatsby-route-change
				// routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",

				/// Defaults to false
				enableWebVitalsTracking: true,
			},
		},

		/** Redirects in gatsby-node.js */
		`gatsby-plugin-meta-redirect`, // make sure to put last in the array
	],
};
