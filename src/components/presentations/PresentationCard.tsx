import clsx from "clsx";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { forwardRef } from "react";
import * as React from "react";
import YouTube from "react-youtube";
import tinydate from "tinydate";

import { parseYoutubeIdFromLink } from "@/utils/utils";

import * as styles from "./PresentationCard.module.scss";

type PresentationCardProps = {
	isLeft: boolean;
	children?: string & React.ReactNode;
} & Omit<React.HTMLProps<HTMLDivElement>, "children"> &
	Omit<GatsbyTypes.ContentfulPresentation, "children">;

function presentationCard(
	{
		title,
		name,
		startDate,
		endDate,
		profession,
		videoLink,
		image,
		isLeft,
		children,
		className,
	}: PresentationCardProps,
	ref: React.Ref<HTMLDivElement>,
) {
	if (!image || !image.gatsbyImageData) {
		return null;
	}
	const imageData = getImage(image.gatsbyImageData);
	if (!imageData) {
		return null;
	}
	const startDateObj = new Date(startDate ?? "");
	const endDateObj = new Date(endDate ?? startDate ?? "");
	const stamp = tinydate("{HH}:{mm}");
	if (stamp(endDateObj) === stamp(startDateObj)) {
		// endDateObj.setHours(startDateObj.getHours());
		endDateObj.setMinutes(startDateObj.getMinutes() + 30);
	}

	console.log(title);

	const ytId = parseYoutubeIdFromLink(videoLink ?? "");

	return (
		<motion.figure
			className={clsx(
				"prose prose-orange dark:prose-invert",
				styles.card,
				className,
			)}
			ref={ref}
		>
			<span
				className={clsx(
					"hidden absolute top-0 p-1 text-lg font-semibold text-center text-gray-900 bg-[#f07e46] rounded-md sm:inline-block",
					!isLeft && "sm:hidden",
				)}
				style={{
					right: isLeft ? "calc((-128px / 2) - (128px / 2 / 2))" : "",
				}}
			>
				{stamp(startDateObj)}
			</span>
			<div className={clsx(styles.container)}>
				<div className={styles.imageContainer}>
					<GatsbyImage
						image={imageData}
						className={styles.image}
						alt={name ?? ""}
					/>
				</div>

				<figcaption className="col-span-2 sm:col-span-1">
					<h3
						className={clsx(
							"mb-3 text-xl font-bold",
							isLeft === true ? "text-yellow-200" : "text-blue-200",
						)}
					>
						{title}
					</h3>
					<h4 className="mb-1 text-sm uppercase">
						<span className="text-[#f07e46]">{name}</span> -{" "}
						{profession ?? "ErrNo: Profession"}
					</h4>
					{startDateObj && endDateObj && (
						<h5 className="font-bold text-[#6abd51]">
							{stamp(startDateObj)}-{stamp(endDateObj)}
						</h5>
					)}
				</figcaption>
				{ytId && (
					<div className="col-span-2 mt-2 w-full">
						<YouTube
							videoId={ytId}
							containerClassName="aspect-w-16 aspect-h-9"
						/>
					</div>
				)}
				<div className={styles.content}>
					{children && <MDXRenderer>{children}</MDXRenderer>}
				</div>
			</div>
		</motion.figure>
	);
}

export const PresentationCard = forwardRef<
	HTMLDivElement,
	PresentationCardProps
>(presentationCard);
