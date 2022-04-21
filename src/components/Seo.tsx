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
	const { site } = useStaticQuery<GatsbyTypes.SeoQueryQuery>(
		graphql`
			query SeoQuery {
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
	const titleTemplate = site?.siteMetadata?.title
		? `${site.siteMetadata.title} | %s`
		: "XIX. Simonyi Konferencia | %s";
	const defaultTitle = site?.siteMetadata?.title ?? "XIX. Simonyi Konferencia";
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
			titleTemplate={titleTemplate}
			defaultTitle={defaultTitle}
			link={[
				{
					rel: "icon",
					type: "image/png",
					href: "/favicon-16.png",
					sizes: "16x16",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "/favicon-32.png",
					sizes: "32x32",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "/favicon-64.png",
					sizes: "64x64",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "/favicon.png",
					sizes: "128x128",
				},
				{
					rel: "icon",
					type: "image/png",
					href: "/favicon-256.png",
					sizes: "256x256",
				},
			]}
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
				{
					name: "color-scheme",
					content: "dark light",
				},
			].concat(meta)}
		/>
	);
}
