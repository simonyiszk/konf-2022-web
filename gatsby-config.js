const dotenv = require("dotenv");

dotenv.config({ path: "./.env.development.local" });
dotenv.config({ path: "./.env.local" });

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
		`gatsby-plugin-tsconfig-paths`,

		/** Contentful types */
		{
			resolve: `gatsby-plugin-typegen`,
			options: {
				emitSchema: {
					"src/@types/__generated__/gatsby-schema.graphql": true,
				},
				emitPluginDocuments: {
					"src/@types/__generated__/gatsby-plugin-documents.graphql": true,
				},
				outputPath: `src/@types/__generated__/gatsby-types.d.ts`,
			},
		},

		/** Contentful integration */
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				host: process.env.CONTENTFUL_HOST,
			},
		},

		/** Markdown */
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// Footnotes mode (default: true)
				footnotes: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: [],
			},
		},

		/** React Helmet */
		`gatsby-plugin-react-helmet`,

		/** Preload images */
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},

		/** Optimize images */
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`, `webp`],
					placeholder: `blurred`,
				},
			},
		},

		/** Inline Contentful svgs */
		`gatsby-transformer-inline-svg`,

		/** Build site manifest */
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: siteMetadata.title,
				short_name: siteMetadata.title,
				start_url: `/`,
				background_color: `#111827`,
				theme_color: `#d1eaeb`,
				display: `minimal-ui`,
				icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
			},
		},

		/** PWA */
		`gatsby-plugin-offline`,

		/** MDX support */
		`gatsby-plugin-mdx`,

		`gatsby-plugin-sass`,
		`gatsby-plugin-postcss`,
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},

		{
			resolve: `gatsby-plugin-build-date`,
			options: {
				formatAsDateString: false, // boolean, defaults to true - if false API will return unformatted string from new Date()
				// locale: 'hu', // string, defaults to null, which date-and-time defaults as "en" - whether to localize the date or not, can use any available date-and-time localization
			},
		},

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
