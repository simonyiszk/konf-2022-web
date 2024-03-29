import { graphql } from "gatsby";
import * as React from "react";
import type { ReactImageGalleryItem } from "react-image-gallery";

import { CMSGallery } from "@/components/cmsGallery/CMSGallery";
import { CMSParagraph } from "@/components/cmsParagraph/CMSParagraph";
import { Contacts } from "@/components/contacts/Contacts";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Layout } from "@/components/Layout";
import { Location } from "@/components/location/Location";
import { Navbar } from "@/components/navbar/Navbar";
import { Presentations } from "@/components/presentations/Presentations";
import { Seo } from "@/components/Seo";
import { SponsorSection } from "@/components/sponsors/SponsorSection";
import { Stars } from "@/components/stars/Stars";

type IndexProps = {
	data: {
		presentations: GatsbyTypes.ContentfulPresentationConnection;
		breaks: GatsbyTypes.ContentfulBreakConnection;
		main?: GatsbyTypes.ContentfulParagraph;
		gallery?: GatsbyTypes.ContentfulGalleryImages;
		organizers: GatsbyTypes.ContentfulOrganizerConnection;
		gold?: GatsbyTypes.ContentfulSponsorLogo;
		silver: GatsbyTypes.ContentfulSponsorLogoConnection;
		bronze: GatsbyTypes.ContentfulSponsorLogoConnection;
	};
};

export default function IndexPage({ data }: IndexProps) {
	const {
		presentations,
		breaks,
		main,
		gallery,
		organizers,
		gold,
		silver,
		bronze,
	} = data;

	const images: ReactImageGalleryItem[] =
		gallery?.images?.map((image) => {
			return { original: image?.url ?? "", thumbnail: image?.url ?? "" };
		}) ?? [];

	console.log("2022");

	return (
		<Layout>
			<Seo title="2022.04.27." />

			<Hero />

			<Navbar />

			<Stars />

			<CMSParagraph content={main} />
			<CMSGallery images={images} />

			<Presentations presentations={presentations} breaks={breaks} />

			<Contacts organizers={organizers.nodes} />
			<Location />
			<SponsorSection gold={gold} silver={silver} bronze={bronze} />

			<Footer />
		</Layout>
	);
}

export const query = graphql`
	query IndexQuery {
		presentations: allContentfulPresentation {
			nodes {
				room
				title
				name
				profession
				startDate
				endDate
				image {
					gatsbyImageData
				}
				description {
					childMdx {
						body
					}
				}
				videoLink
				sys {
					contentType {
						sys {
							id
						}
					}
				}
			}
		}
		breaks: allContentfulBreak {
			nodes {
				startDate
				endDate
				room
				text {
					childMdx {
						body
					}
				}
				sys {
					contentType {
						sys {
							id
						}
					}
				}
			}
		}
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
		organizers: allContentfulOrganizer(sort: { fields: order, order: ASC }) {
			nodes {
				name
				title
				email
				image {
					gatsbyImageData
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
					# originalContent # Original SVG content
					# dataURI # Optimized SVG as compact dataURI
					# absolutePath
					# relativePath
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
						# originalContent # Original SVG content
						# dataURI # Optimized SVG as compact dataURI
						# absolutePath
						# relativePath
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
						# originalContent # Original SVG content
						# dataURI # Optimized SVG as compact dataURI
						# absolutePath
						# relativePath
					}
				}
			}
		}
	}
`;
