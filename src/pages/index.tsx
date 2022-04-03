import { graphql } from "gatsby";
import * as React from "react";

import { CMSParagraph } from "@/components/cmsParagraph/CMSParagraph";
import { Hero } from "@/components/hero/Hero";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { SponsorSection } from "@/components/sponsors/SponsorSection";

type IndexProps = {
	data: {
		main?: GatsbyTypes.ContentfulParagraph;
		gold?: GatsbyTypes.ContentfulSponsorLogo;
		silver: GatsbyTypes.ContentfulSponsorLogoConnection;
		bronze: GatsbyTypes.ContentfulSponsorLogoConnection;
	};
};

export default function IndexPage({ data }: IndexProps) {
	return (
		<Layout>
			<Seo title="2022.04.27." />
			<Hero />

			<CMSParagraph content={data.main} />
			<SponsorSection
				gold={data.gold}
				silver={data.silver}
				bronze={data.bronze}
			/>
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
					absolutePath #
					relativePath #
				}
			}
		}
		silver: allContentfulSponsorLogo(
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
						absolutePath #
						relativePath #
					}
				}
			}
		}
		bronze: allContentfulSponsorLogo(
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
						absolutePath #
						relativePath #
					}
				}
			}
		}
	}
`;
