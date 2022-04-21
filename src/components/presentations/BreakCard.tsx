import clsx from "clsx";
import { motion } from "framer-motion";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { forwardRef } from "react";
import * as React from "react";
import tinydate from "tinydate";

import * as styles from "./PresentationCard.module.scss";

type BreakCardProps = {
	isLeft: boolean;
	children: string & React.ReactNode;
} & Omit<React.HTMLProps<HTMLDivElement>, "children"> &
	Omit<GatsbyTypes.ContentfulBreak, "children">;

function breakCard(
	{ startDate, endDate, isLeft, children, className, room }: BreakCardProps,
	ref: React.Ref<HTMLDivElement>,
) {
	const startDateObj = new Date(startDate ?? "");
	const endDateObj = new Date(endDate ?? "");
	const stamp = tinydate("{HH}:{mm}");

	return (
		<>
			{room?.toLowerCase() !== "both" && (
				<motion.figure
					className={clsx(styles.card, "w-full", className)}
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
					<div
						className={clsx(
							"prose prose-orange dark:prose-invert",
							styles.container,
						)}
					>
						<div
							className={clsx(
								styles.content,
								"font-semibold",
								isLeft ? "text-yellow-200" : "text-blue-200",
							)}
						>
							<MDXRenderer>{children}</MDXRenderer>
						</div>
						<h5 className="col-span-2 -mt-3 mb-4 font-bold text-center text-white">
							{stamp(startDateObj)}-{stamp(endDateObj)}
						</h5>
					</div>
				</motion.figure>
			)}
			{room?.toLowerCase() === "both" && (
				<motion.figure
					className={clsx(
						"grid z-10 grid-cols-2 col-span-2 content-center w-full",
					)}
					ref={ref}
				>
					<div className={clsx("flex flex-col items-center sm:col-span-2 ")}>
						<div className="p-1 mb-4 w-16 text-lg font-semibold text-center text-gray-900 bg-[#f07e46] rounded-md">
							{stamp(startDateObj)}
						</div>
						<div
							className={clsx(
								"prose prose-orange dark:prose-invert",
								styles.content,
								styles.underlinedH3,
								"font-semibold text-center",
							)}
						>
							<MDXRenderer>{children}</MDXRenderer>
						</div>
					</div>
					<div className={clsx("flex flex-col items-center sm:hidden")}>
						<div className="p-1 mb-4 w-16 text-lg font-semibold text-center text-gray-900 bg-[#f07e46] rounded-md">
							{stamp(startDateObj)}
						</div>
						<div
							className={clsx(
								"prose prose-orange dark:prose-invert",
								styles.content,
								styles.underlinedH3,
								"font-semibold text-center",
							)}
						>
							<MDXRenderer>{children}</MDXRenderer>
						</div>
					</div>
				</motion.figure>
			)}
		</>
	);
}

export const BreakCard = forwardRef<HTMLDivElement, BreakCardProps>(breakCard);
