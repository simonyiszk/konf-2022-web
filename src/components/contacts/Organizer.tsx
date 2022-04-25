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
		<div className="flex flex-col items-center px-10 mb-10 space-y-3 text-primary-200">
			<div className="rounded-full">
				<div className="block overflow-hidden p-2 w-56 h-56 bg-primary-200 rounded-full border-separate">
					<GatsbyImage
						image={imageData}
						alt={`${name} arcképe`}
						className="rounded-full"
						imgClassName="rounded-full"
					/>
				</div>
			</div>
			<h3 className="text-3xl font-semibold">{name}</h3>
			<h4 className="text-sm font-bold tracking-wider uppercase">{title}</h4>
			<a
				href={`mailto:${email}`}
				className="text-[#F07E46] underline decoration-[#F07E46] decoration-dashed underline-offset-4 hover:underline-offset-2"
			>
				{email}
			</a>
		</div>
	);
}
