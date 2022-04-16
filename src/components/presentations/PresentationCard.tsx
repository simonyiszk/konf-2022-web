import clsx from "clsx";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import { forwardRef } from "react";
import * as React from "react";
import YouTube from "react-youtube";
import tinydate from "tinydate";

import { parseYoutubeIdFromLink } from "@/utils/utils";

import * as styles from "./PresentationCard.module.scss";

type PresentationCardProps = {
	imageURL: string;
	isLeft: boolean;
} & GatsbyTypes.ContentfulPresentation &
	React.HTMLProps<HTMLDivElement>;

function presentationCard(
	{
		title,
		name,
		startDate,
		endDate,
		profession,
		videoLink,
		imageURL,
		isLeft,
		children,
		className,
	}: PresentationCardProps,
	ref: React.Ref<HTMLDivElement>,
) {
	const startDateObj = new Date(startDate ?? "");
	const endDateObj = new Date(endDate ?? "");
	const stamp = tinydate("{HH}:{mm}");

	const ytId = parseYoutubeIdFromLink(videoLink ?? "");

	return (
		<motion.figure className={clsx(styles.card, className)} ref={ref}>
			<span
				className={clsx(
					"hidden absolute top-0 p-1 text-lg font-semibold text-center rounded-md sm:inline-block text-blue bg-yellow",
					!isLeft && "sm:hidden",
				)}
				style={{
					right: isLeft ? "calc((-128px / 2) - (128px / 2 / 2))" : "",
				}}
			>
				{stamp(startDateObj)}
			</span>
			<div className={styles.container}>
				<div className={styles.imageContainer}>
					<GatsbyImage className={styles.image} alt={name ?? ""} />
				</div>

				<figcaption className="col-span-2 sm:col-span-1">
					<h3
						className={clsx(
							"mb-3 text-xl font-bold",
							isLeft === true ? "text-teal" : "text-green",
						)}
					>
						{title}
					</h3>
					<h4 className="mb-1 text-sm uppercase">
						<span className="text-red">{name}</span> -{" "}
						{profession ?? "ErrNo: Profession"}
					</h4>
					{startDate && endDate && (
						<h5 className="font-bold text-yellow">
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
				<div className={styles.content}>{children}</div>
			</div>
		</motion.figure>
	);
}

export const PresentationCard = forwardRef<
	HTMLDivElement,
	PresentationCardProps
>(presentationCard);
