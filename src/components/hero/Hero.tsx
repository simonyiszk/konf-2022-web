import clsx from "clsx";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import * as React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

import { useWindowDimensions } from "@/utils/hooks";

import { Background } from "./Background";
import * as styles from "./Hero.module.scss";

export function Hero() {
	const [count, setCount] = React.useState(0);
	const { scrollY } = useViewportScroll();
	const { height } = useWindowDimensions();

	const backgroundColor = useTransform(
		scrollY,
		[0, (height ?? 600) * 1],
		["hsl(182, 40, 87)", "hsl(221, 39, 11)"],
	);
	const color = useTransform(
		scrollY,
		[(height ?? 0) * 0.5, (height ?? 600) * 1],
		["hsl(221, 39, 11)", "hsl(182, 40, 87)"],
	);

	return (
		<>
			<div className="relative">
				<Background count={count} setCount={setCount} />
			</div>

			<motion.div
				className="h-[200vh] pointer-events-none"
				style={{ backgroundColor }}
			>
				<div className={clsx(styles.bg)}>
					<motion.div
						className={clsx(
							styles.heroContainer,
							"flex z-20 flex-col justify-center items-center mx-auto w-fit h-screen font-dongle font-bold text-primary",
						)}
						style={{ color }}
					>
						<h1
							className={clsx(
								"grid text-center uppercase",
								"text-6xl",
								"sm:text-8xl sm:leading-[5rem]",
								"lg:text-9xl lg:leading-[7rem]",
								styles.title,
								// styles.shadow,
							)}
						>
							<motion.span
								className="relative z-30"
								style={{ willChange: "left, opacity" }}
								animate={{ opacity: 1, left: 0 }}
								transition={{ delay: 0.5, duration: 2 }}
								initial={{ opacity: 0, left: -300 }}
							>
								XIX.&nbsp;
							</motion.span>
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
								{count < 10 ? "Konferencia" : "Konferencica"}
							</motion.span>
						</h1>
						<div
							className={clsx(
								"grid col-span-2 w-full",
								"text-3xl",
								"sm:text-5xl",
								"lg:text-6xl",
								styles.date,
								// styles.shadow,
							)}
						>
							<div className="relative self-center mx-3">
								<motion.hr
									style={{ willChange: "width", borderColor: color }}
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
									style={{ willChange: "width", borderColor: color }}
									className="absolute right-0 rounded-full border-t-[3px] border-primary rotate-180"
									animate={{ width: "100%" }}
									transition={{ delay: 3.5, duration: 1.5 }}
									initial={{ width: "0%" }}
								/>
							</div>
						</div>
						<div
							className={clsx(
								"flex flex-row justify-between mt-4 w-full",
								// styles.shadow,
							)}
						>
							<motion.a
								className="block relative p-2 mx-4 hover:brightness-75"
								href="https://fb.me/e/myxPUe7JM"
								target="_blank"
								rel="noopener"
								style={{ willChange: "left, opacity" }}
								animate={{ opacity: 1, left: 0 }}
								transition={{ delay: 4, duration: 1.5 }}
								initial={{ opacity: 0, left: -80 }}
							>
								<BsFacebook className="w-8 h-auto sm:w-10 lg:w-12" />
							</motion.a>
							<motion.a
								className="block relative p-2 mx-4 hover:brightness-75"
								href="https://instagram.com/simonyikonf"
								target="_blank"
								rel="noopener"
								style={{ willChange: "right, opacity" }}
								animate={{ opacity: 1, right: 0 }}
								transition={{ delay: 4, duration: 1.5 }}
								initial={{ opacity: 0, right: -80 }}
							>
								<BsInstagram className="w-8 h-auto sm:w-10 lg:w-12" />
							</motion.a>
						</div>
						<div className="flex relative justify-center mt-4 font-sans">
							<motion.a
								className="relative p-4 w-fit text-xl font-bold text-white bg-[#f07e46] rounded-lg hover:rounded-2xl active:rounded-full transition-all lg:text-2xl"
								href="https://xixsimonyikonf.eventbrite.com/"
								style={{ willChange: "top, opacity" }}
								animate={{ opacity: 1, top: 0 }}
								transition={{ delay: 4.5, duration: 1.5 }}
								initial={{ opacity: 0, top: 80 }}
								target="_blank"
								rel="noopener noreferrer"
							>
								Regisztráció
							</motion.a>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
}
