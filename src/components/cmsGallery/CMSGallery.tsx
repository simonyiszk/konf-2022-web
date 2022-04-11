import * as React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

export type CMSGalleryProps = {
	images: ReactImageGalleryItem[];
};

export function CMSGallery({ images }: CMSGalleryProps) {
	return (
		<section className="container px-4 my-16 mx-auto lg:my-24">
			<h3 className="text-3xl font-medium text-center">
				Képek korábbi konferenciákról
			</h3>
			<ImageGallery
				items={images}
				thumbnailPosition="top"
				slideInterval={7000}
				slideDuration={500}
				lazyLoad
				showBullets
				showIndex
				autoPlay
			/>
		</section>
	);
}
