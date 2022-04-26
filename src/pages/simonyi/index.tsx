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

type SimonyiProps = {
	data: {
		simonyi?: GatsbyTypes.ContentfulParagraph;
	};
};

export default function SimonyiPage({ data }: SimonyiProps) {
	const { simonyi } = data;

	return (
		<Layout>
			<Seo title="A Simonyi Károly Szakkollégium" />

			<Navbar style={{ marginTop: "1rem", marginBottom: "1rem" }} />

			<Stars />

			<CMSParagraph content={simonyi} />

			<Footer />
		</Layout>
	);
}

export const query = graphql`
	query SimonyiQuery {
		simonyi: contentfulParagraph(name: { eq: "simonyi" }) {
			name
			content {
				childMdx {
					body
				}
			}
		}
	}
`;
