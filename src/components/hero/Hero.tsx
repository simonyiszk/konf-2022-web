import clsx from "clsx";
import { motion } from "framer-motion";
import * as React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

import { Background } from "./Background";
import * as styles from "./Hero.module.scss";

export function Hero() {
	return (
		<div className={clsx(styles.bg)}>
			<Background />
			<div className="flex relative flex-col justify-center items-center mx-auto w-fit h-screen font-dongle font-bold text-primary border-primary">
				<h1
					className={clsx(
						"grid font-bold text-center",
						"text-6xl",
						"sm:text-8xl sm:leading-[5rem]",
						"lg:text-9xl lg:leading-[7rem]",
						styles.title,
					)}
				>
					<motion.span
						className="relative"
						style={{ willChange: "left, opacity" }}
						animate={{ opacity: 1, left: 0 }}
						transition={{ delay: 0.5, duration: 2 }}
						initial={{ opacity: 0, left: -300 }}
					>
						XIX.
					</motion.span>{" "}
					<motion.span
						className="relative"
						style={{ willChange: "right, opacity" }}
						animate={{ opacity: 1, right: 0 }}
						transition={{ delay: 0.5, duration: 2 }}
						initial={{ opacity: 0, right: -300 }}
					>
						Simonyi
					</motion.span>
					<motion.span
						className="relative col-span-2 tracking-wide"
						style={{ willChange: "top, opacity" }}
						animate={{ opacity: 1, top: 0 }}
						transition={{ delay: 1.5, duration: 1.5 }}
						initial={{ opacity: 0, top: 150 }}
					>
						Konferencia
					</motion.span>
				</h1>
				<div
					className={clsx(
						"grid col-span-2 w-full",
						"text-3xl",
						"sm:text-5xl",
						"lg:text-6xl",
						styles.date,
					)}
				>
					<div className="relative self-center mx-3">
						<motion.hr
							style={{ willChange: "width" }}
							className="rounded-full border-t-[3px] border-primary"
							animate={{ width: "100%" }}
							transition={{ delay: 3.5, duration: 1.5 }}
							initial={{ width: "0%" }}
						/>
					</div>
					<motion.h2
						className="relative px-1 sm:px-2"
						style={{ willChange: "top, opacity" }}
						animate={{ opacity: 1, top: 0 }}
						transition={{ delay: 2.5, duration: 1.5 }}
						initial={{ opacity: 0, top: 75 }}
					>
						2022.04.27.
					</motion.h2>
					<div className="relative self-center mx-3">
						<motion.hr
							style={{ willChange: "width" }}
							className="absolute right-0 rounded-full border-t-[3px] border-primary rotate-180"
							animate={{ width: "100%" }}
							transition={{ delay: 3.5, duration: 1.5 }}
							initial={{ width: "0%" }}
						/>
					</div>
				</div>
				<div className="flex flex-row justify-evenly mt-4 w-full">
					{/* <motion.a
						className="block relative p-2 mx-4 hover:brightness-75"
						href="https://facebook.com/schdesignbme"
						target="_blank"
						rel="noopener"
						style={{ willChange: "left, opacity" }}
						animate={{ opacity: 1, left: 0 }}
						transition={{ delay: 4, duration: 1.5 }}
						initial={{ opacity: 0, left: -50 }}
					>
						<BsFacebook className="w-8 h-auto sm:w-10 lg:w-12" />
					</motion.a> */}
					<motion.a
						className="block relative p-2 mx-4 hover:brightness-75"
						href="https://instagram.com/simonyikonf"
						target="_blank"
						rel="noopener"
						style={{ willChange: "right, opacity" }}
						animate={{ opacity: 1, right: 0 }}
						transition={{ delay: 4, duration: 1.5 }}
						initial={{ opacity: 0, right: -50 }}
					>
						<BsInstagram className="w-8 h-auto sm:w-10 lg:w-12" />
					</motion.a>
				</div>
			</div>
		</div>
	);
}
