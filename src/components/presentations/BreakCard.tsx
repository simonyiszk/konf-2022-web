import clsx from "clsx";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import * as React from "react";
import tinydate from "tinydate";

import styles from "./PresentationCard.module.scss";

type BreakCardProps = {
	isLeft: boolean;
} & React.HTMLProps<HTMLDivElement>;

function breakCard(
	{ startDate, endDate, isDouble, isLeft, children, className }: BreakCardProps,
	ref: React.Ref<HTMLDivElement>,
) {
	const startDateObj = new Date(startDate ?? "");
	const endDateObj = new Date(endDate ?? "");
	const stamp = tinydate("{HH}:{mm}");

	return (
		<>
			{isDouble === false && (
				<motion.figure
					className={clsx(styles.card, "w-full", className)}
					ref={ref}
				>
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
						<div
							className={clsx(
								styles.content,
								"font-semibold",
								isLeft ? "text-teal" : "text-green",
							)}
						>
							{children}
						</div>
						<h5 className="col-span-2 -mt-3 mb-4 font-bold text-center text-yellow">
							{stamp(startDateObj)}-{stamp(endDateObj)}
						</h5>
					</div>
				</motion.figure>
			)}
			{isDouble === true && (
				<motion.figure
					className={clsx(
						"grid z-10 grid-cols-2 col-span-2 content-center w-full font-Roboto",
					)}
					ref={ref}
				>
					<div className="flex flex-col items-center sm:col-span-2">
						<div className="p-1 mb-4 w-16 text-lg font-semibold text-center rounded-md text-blue bg-yellow">
							{stamp(startDateObj)}
						</div>
						<div
							className={clsx(
								styles.content,
								styles.underlinedH3,
								"font-semibold text-center",
							)}
						>
							{children}
						</div>
					</div>
					<div className="flex flex-col items-center sm:hidden">
						<div className="p-1 mb-4 w-16 text-lg font-semibold text-center rounded-md text-blue bg-yellow">
							{stamp(startDateObj)}
						</div>
						<div
							className={clsx(
								styles.content,
								styles.underlinedH3,
								"font-semibold text-center",
							)}
						>
							{children}
						</div>
					</div>
				</motion.figure>
			)}
		</>
	);
}

export const BreakCard = forwardRef<HTMLDivElement, BreakCardProps>(breakCard);
