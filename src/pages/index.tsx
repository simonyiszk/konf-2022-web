import { graphql } from "gatsby";
import * as React from "react";
import type { ReactImageGalleryItem } from "react-image-gallery";

import { CMSGallery } from "@/components/cmsGallery/CMSGallery";
import { CMSParagraph } from "@/components/cmsParagraph/CMSParagraph";
import { Hero } from "@/components/hero/Hero";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { SponsorSection } from "@/components/sponsors/SponsorSection";

type IndexProps = {
	data: {
		main?: GatsbyTypes.ContentfulParagraph;
		gallery?: GatsbyTypes.ContentfulGalleryImages;
		gold?: GatsbyTypes.ContentfulSponsorLogo;
		silver: GatsbyTypes.ContentfulSponsorLogoConnection;
		bronze: GatsbyTypes.ContentfulSponsorLogoConnection;
	};
};

export default function IndexPage({ data }: IndexProps) {
	const { main, gallery, gold, silver, bronze } = data;

	const images: ReactImageGalleryItem[] =
		gallery?.images?.map((image) => {
			return { original: image?.url ?? "", thumbnail: image?.url ?? "" };
		}) ?? [];
	return (
		<Layout>
			<Seo title="2022.04.27." />
			<Hero />

			<CMSParagraph content={main} />

			<CMSGallery images={images} />

			<SponsorSection gold={gold} silver={silver} bronze={bronze} />
		</Layout>
	);
}

export const query = graphql`
	query IndexQuery {
		main: contentfulParagraph(name: { eq: "Main" }) {
			name
			content {
				childMdx {
					body
				}
			}
		}
		gallery: contentfulGalleryImages(name: { eq: "Main" }) {
			images {
				url
			}
		}
		gold: contentfulSponsorLogo(sponsorshipGrade: { eq: "főtámogató" }) {
			name
			link
			sponsorshipGrade
			image {
				file {
					contentType
					url
				}
				gatsbyImageData
				svg {
					content # SVG content optimized with SVGO
					originalContent # Original SVG content
					dataURI # Optimized SVG as compact dataURI
					absolutePath
					relativePath
				}
			}
		}
		silver: allContentfulSponsorLogo(
			sort: { fields: name, order: ASC }
			filter: { sponsorshipGrade: { eq: "kiemelt támogató" } }
		) {
			nodes {
				name
				link
				sponsorshipGrade
				image {
					file {
						contentType
						url
					}
					gatsbyImageData
					svg {
						content # SVG content optimized with SVGO
						originalContent # Original SVG content
						dataURI # Optimized SVG as compact dataURI
						absolutePath
						relativePath
					}
				}
			}
		}
		bronze: allContentfulSponsorLogo(
			sort: { fields: name, order: ASC }
			filter: { sponsorshipGrade: { eq: "támogató" } }
		) {
			nodes {
				name
				link
				sponsorshipGrade
				image {
					file {
						contentType
						url
					}
					gatsbyImageData
					svg {
						content # SVG content optimized with SVGO
						originalContent # Original SVG content
						dataURI # Optimized SVG as compact dataURI
						absolutePath
						relativePath
					}
				}
			}
		}
	}
`;
