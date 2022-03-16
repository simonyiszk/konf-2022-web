/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			plugins: [new TsconfigPathsPlugin()],
		},
	});
};

exports.createPages = async ({ /* graphql, */ actions }) => {
	const { createRedirect } = actions;
	createRedirect({
		fromPath: "/2021",
		toPath: "https://2021.konferencia.simonyi.bme.hu",
		isPermanent: true,
	});
	createRedirect({
		fromPath: "/2019",
		toPath: "https://regi.konferencia.simonyi.bme.hu",
		isPermanent: true,
	});
	createRedirect({
		fromPath: "/2018",
		toPath: "https://regi.konferencia.simonyi.bme.hu/2018",
		isPermanent: true,
	});
	createRedirect({
		fromPath: "/2017",
		toPath: "https://regi.konferencia.simonyi.bme.hu/2017",
		isPermanent: true,
	});
	createRedirect({
		fromPath: "/2016",
		toPath: "https://regi.konferencia.simonyi.bme.hu/2016",
		isPermanent: true,
	});
	// Create pages here
};
