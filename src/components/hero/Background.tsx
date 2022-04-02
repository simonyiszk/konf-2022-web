import clsx from "clsx";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import * as React from "react";

import Macska1 from "@/assets/svg/Macska1.inline.svg";
import { useWindowDimensions } from "@/utils/hooks";

import * as styles from "./Background.module.scss";

export type BackgroundProps = {
	count: number;
	setCount: (c: number) => void;
};

export function Background({ count, setCount }: BackgroundProps) {
	const { scrollY } = useViewportScroll();
	const { height } = useWindowDimensions();

	const scale = useTransform(scrollY, [0, (height ?? 600) * 1], [1, 0.1]);
	const translateY = useTransform(
		scrollY,
		[0, (height ?? 600) * 1],
		[0, (height ?? 600) * -0.8],
	);
	// const rotate = useTransform(scrollY, [0, (height ?? 600) * 1], [0, -90]);
	const opacity = useTransform(scrollY, [0, (height ?? 600) * 1.1], [1.5, 0.2]);

	return (
		<div
			aria-hidden
			className="overflow-x-hidden overflow-y-clip absolute w-full h-[200vh] pointer-events-auto"
			style={{ userSelect: "none" }}
		>
			<motion.div
				className="relative w-full h-[200vh] origin-[bottom_center]"
				style={{
					scale,
					translateY,
					opacity,
					/* rotate, */
					willChange: "transform, opacity",
				}}
			>
				<div className="absolute top-[30%] right-[-150%] w-[400%] sm:top-[20%] sm:right-[-100%] sm:w-[300%] lg:top-[10%] lg:right-[-50%] lg:w-[200%]">
					<img className="w-[500vw]" src="/assets/images/earth.svg" alt="" />
				</div>
			</motion.div>

			<div
				className={clsx(
					"absolute bottom-[80px] left-1/3 w-1/6 pointer-events-auto",
					count < 10 ? "text-[#f07e46]" : "text-[#6abd51]",
				)}
			>
				{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
				<Macska1
					className={clsx("max-h-[70px] transform-gpu")}
					style={{
						opacity: 1 - count * 0.1 > 0 ? 1 - count * 0.1 : 1,
						transform: `scale(${1 + count * 0.2})`,
					}}
					alt=""
					onClick={() => {
						setCount(count + 1);
					}}
				/>
			</div>

			<div
				className={clsx(styles.marquee4, "absolute top-44 right-44 opacity-75")}
			>
				<img className="" src="/assets/images/Felhő4.svg" alt="" />
			</div>
			<div
				className={clsx(
					styles.marquee2,
					"hidden absolute top-20 left-20 opacity-75 md:block",
				)}
			>
				<img className="" src="/assets/images/Felhő5.svg" alt="" />
			</div>
			<div className={clsx(styles.marquee1, "absolute top-0 left-1/2")}>
				<div
					className={clsx(
						"absolute top-[7px] left-[15%] w-1/2",
						count < 10 ? "text-[#f07e46]" : "text-[#6abd51]",
					)}
				>
					{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
					<Macska1
						className={clsx("max-h-[70px] pointer-events-auto")}
						style={{
							opacity: 1 - count * 0.1 > 0 ? 1 - count * 0.1 : 1,
							transform: `scale(${1 + count * 0.2})`,
						}}
						alt=""
						onClick={() => {
							setCount(count + 1);
						}}
					/>
				</div>
				<img
					className="z-20 opacity-75 pointer-events-none"
					src="/assets/images/Felhő5.svg"
					alt=""
				/>
			</div>
			<div
				className={clsx(
					styles.marquee3,
					"hidden absolute -top-4 left-1/3 opacity-75 md:block",
				)}
			>
				<img className="" src="/assets/images/Felhő2.svg" alt="" />
			</div>
		</div>
	);
}
