import clsx from "clsx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";

export type OrganizerProps = {
	name: string;
	email: string;
	title: string;
	image?: GatsbyTypes.ContentfulAsset;
};

export function Organizer({ name, title, email, image }: OrganizerProps) {
	if (!image || !image.gatsbyImageData) {
		return null;
	}
	const imageData = getImage(image.gatsbyImageData);
	if (!imageData) {
		return null;
	}
	return (
		<div className="flex flex-col items-center px-10 mb-10 space-y-3">
			<div className="p-2 bg-primary-200 rounded-full">
				<div className="block p-2 w-56 h-56 bg-gray-900 rounded-full">
					<GatsbyImage
						image={imageData}
						alt={`${name} arcképe`}
						className="rounded-full"
					/>
				</div>
			</div>
			<h3 className="text-3xl font-semibold">{name}</h3>
			<h4 className="text-sm font-bold tracking-wider uppercase">{title}</h4>
			<a href={`mailto:${email}`} className="border-b border-dashed">
				{email}
			</a>
		</div>
	);
}
