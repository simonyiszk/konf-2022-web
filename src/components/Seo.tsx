/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

export type SeoProps = {
	description?: string;
	lang?: string;
	title: string;
	meta?: { name: string; content: string }[];
};

export function Seo({ description, lang = "hu", meta = [], title }: SeoProps) {
	const { site }: GatsbyTypes.Query = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						siteUrl
						title
						description
						author
						image
						favicon
					}
				}
			}
		`,
	);

	const metaDescription =
		description ??
		site?.siteMetadata?.description ??
		"XIX. Simonyi Konferencia";
	const defaultTitle = site?.siteMetadata?.title
		? `${site.siteMetadata.title}`
		: "XIX. Simonyi Konferencia";
	const previewImage =
		site?.siteMetadata?.image && site?.siteMetadata?.siteUrl
			? `${site?.siteMetadata?.siteUrl}${site?.siteMetadata?.image}`
			: "https://konferencia.simonyi.bme.hu/preview.png";

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={defaultTitle}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: `${defaultTitle} | ${title}`,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					name: `twitter:creator`,
					content: site?.siteMetadata?.author || ``,
				},
				{
					name: `twitter:title`,
					content: `${defaultTitle} | ${title}`,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				{
					name: `twitter:image`,
					content: previewImage,
				},
				{
					name: `og:image`,
					content: previewImage,
				},
				{
					name: `thumbnail`,
					content: previewImage,
				},
			].concat(meta)}
		/>
	);
}
