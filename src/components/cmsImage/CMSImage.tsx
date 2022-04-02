import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";

export type CMSImageProps = {
	svg?: GatsbyTypes.InlineSvg;
	gatsbyImageData?: IGatsbyImageData;
	file: GatsbyTypes.ContentfulAssetFile;
	alt: string;
};

// Render inline SVG with fallback non-svg images
export function CMSImage({ svg, gatsbyImageData, file, alt }: CMSImageProps) {
	if (file.contentType === "image/svg+xml") {
		if (svg && svg.content) {
			// Inlined SVGs
			// eslint-disable-next-line react/no-danger
			return <div dangerouslySetInnerHTML={{ __html: svg.content }} />;
		}

		// SVGs that can/should not be inlined
		return <img src={file.url} alt={alt} />;
	}

	// Non SVG images
	if (gatsbyImageData) {
		return <GatsbyImage image={gatsbyImageData} alt={alt} />;
	}

	return null;
}
