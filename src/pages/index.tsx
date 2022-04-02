import { graphql } from "gatsby";
import * as React from "react";

import { Hero } from "@/components/hero/Hero";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { SponsorSection } from "@/components/sponsors/SponsorSection";

type IndexProps = {
	data: {
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
