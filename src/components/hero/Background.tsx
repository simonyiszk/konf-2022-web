import clsx from "clsx";
import { motion } from "framer-motion";
import * as React from "react";

import Macska1 from "@/assets/svg/Macska1.inline.svg";

import * as styles from "./Background.module.scss";

export type BackgroundProps = {
	count: number;
	setCount: (c: number) => void;
};

export function Background({ count, setCount }: BackgroundProps) {
	return (
		<div
			aria-hidden
			className="overflow-hidden absolute w-screen h-screen"
			style={{ userSelect: "none" }}
		>
			<div className="absolute inset-x-0 bottom-0">
				<div className={clsx(styles.ground)} />
			</div>

			<div className="absolute bottom-[80px] -left-10 sm:w-1/2 xl:left-10">
				<img className="max-h-[188px]" src="/assets/images/Hegy3b.svg" alt="" />
			</div>
			<div className="absolute bottom-[80px] -left-20 w-2/5 sm:w-1/2 xl:left-0">
				<img className="max-h-[166px]" src="/assets/images/Hegy2b.svg" alt="" />
			</div>
			<div className="absolute bottom-[73px] -left-20 w-1/2 xl:left-0">
				<img className="max-h-[450px]" src="/assets/images/Fa2a.svg" alt="" />
			</div>
			<div className="absolute bottom-[70px] left-10 w-1/6 sm:left-20 xl:left-40">
				<img className="max-h-[60px]" src="/assets/images/Bokor5.svg" alt="" />
			</div>
			<div className="absolute bottom-[70px] left-0 w-1/5 xl:left-20">
				<img className="max-h-[70px]" src="/assets/images/Bokor5.svg" alt="" />
			</div>

			<div className="absolute -right-10 bottom-[73px] w-1/3 sm:w-1/2 md:-right-10 xl:right-0">
				<img
					className="absolute right-0 bottom-0 max-h-[210px]"
					src="/assets/images/Épület.svg"
					alt=""
				/>
			</div>
			<div className="absolute right-20 bottom-[73px] w-1/5 sm:right-52 xl:right-64">
				<img
					className="absolute right-0 bottom-0 max-h-[80px]"
					src="/assets/images/Fa2b.svg"
					alt=""
				/>
			</div>
			<div className="absolute right-[9rem] bottom-[70px] w-1/5 sm:right-[16.2rem] xl:right-[19.2rem]">
				<img
					className="absolute right-0 bottom-0 max-h-[30px]"
					src="/assets/images/Bokor1a.svg"
					alt=""
				/>
			</div>
			<div className="absolute right-[8.4rem] bottom-[70px] w-1/6 sm:right-[15.7rem] xl:right-[18.7rem]">
				<img
					className={clsx(
						"absolute right-0 bottom-0 max-h-[20px]",
						styles.flip,
					)}
					src="/assets/images/Bokor1a.svg"
					alt=""
				/>
			</div>

			<div
				className={clsx(
					"absolute bottom-[80px] left-1/3 w-1/6",
					count < 10 ? "text-[#f07e46]" : "text-[#6abd51]",
				)}
			>
				{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
				<Macska1
					className={clsx("max-h-[70px]")}
					style={{ opacity: 1 - count * 0.1 > 0 ? 1 - count * 0.1 : 1 }}
					alt=""
					onClick={() => {
						setCount(count + 1);
					}}
				/>
			</div>

			<div className={clsx(styles.marquee4, "absolute top-44 right-44")}>
				<img className="" src="/assets/images/Felhő4.svg" alt="" />
			</div>
			<div
				className={clsx(
					styles.marquee2,
					"hidden absolute top-20 left-20 md:block",
				)}
			>
				<img className="" src="/assets/images/Felhő5.svg" alt="" />
			</div>
			<div className={clsx(styles.marquee1, "absolute top-0 left-1/2")}>
				<img className="" src="/assets/images/Felhő5.svg" alt="" />
			</div>
			<div
				className={clsx(
					styles.marquee3,
					"hidden absolute -top-4 left-1/3 md:block",
				)}
			>
				<img className="" src="/assets/images/Felhő2.svg" alt="" />
			</div>
		</div>
	);
}
