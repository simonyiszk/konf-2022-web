import clsx from "clsx";
import { createRef, useEffect, useState } from "react";
import * as React from "react";
import YouTube from "react-youtube";

import { useWindowDimensions } from "@/utils/hooks";
import { orderEntriesByDate } from "@/utils/utils";

import { BreakCard } from "./BreakCard";
import { PresentationCard } from "./PresentationCard";
import * as styles from "./Presentations.module.scss";

type PresentationsProps = {
	presentations: GatsbyTypes.ContentfulPresentationConnection;
	breaks: GatsbyTypes.ContentfulBreakConnection;
};

export function Presentations({ presentations, breaks }: PresentationsProps) {
	const [heights, setHeights] = useState<number[]>([]);

	const [side, setSide] = useState(false);

	const { width } = useWindowDimensions();

	const combined = [...breaks.nodes, ...presentations.nodes];
	combined.sort(orderEntriesByDate);

	const refs = combined.map(() => createRef<HTMLDivElement>());

	const containerRef = createRef<HTMLDivElement>();

	function easeInOutQuad(t: number, b: number, c: number, d: number) {
		// eslint-disable-next-line no-param-reassign
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		// eslint-disable-next-line no-param-reassign, no-plusplus
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	}

	function scrollLeft(change: number, duration: number, s: boolean) {
		if (!containerRef || !containerRef.current) return;

		const start = containerRef.current.scrollLeft;
		let currentTime = 0;
		const increment = 8;

		const animateScroll = () => {
			if (!containerRef || !containerRef.current) return;
			currentTime += increment;
			const val = easeInOutQuad(currentTime, start, change, duration);
			containerRef.current.scrollLeft = val;
			if (currentTime < duration) {
				setTimeout(animateScroll, increment);
			} else {
				setSide(s);
			}
		};
		animateScroll();
	}

	useEffect(() => {
		refs.forEach((ref) => {
			if (ref.current) {
				const clientHeight = ref?.current?.offsetHeight;
				if (clientHeight) setHeights([...heights, clientHeight]);
			}
		});
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [width]);

	return (
		<section className={clsx(styles.section)} id="eloadasok">
			<h2 className="mb-8 text-4xl font-semibold text-center">Előadások</h2>
			<div className="mb-10 text-2xl text-center">
				<p>Az előadások idén online lesznek közvetítve.</p>
				<p>A platformot a Regisztráció gombra kattintva lehet elérni.</p>
			</div>
			<div className="flex sticky top-24 z-20 flex-row justify-evenly rounded-b-md xl:static">
				<button
					className={clsx(
						styles.button,
						styles.button1,
						side === false
							? "text-teal-500 bg-blue-500 ring-4 ring-teal-500"
							: "text-blue-500 bg-teal-500",
					)}
					type="button"
					onClick={() => {
						scrollLeft(
							(containerRef.current?.scrollWidth ?? 2000) * -0.66,
							250,
							false,
						);
					}}
				>
					IB025
				</button>
				<button
					className={clsx(
						styles.button,
						styles.button2,
						side === true
							? "text-green-500 bg-blue-500 ring-4 ring-green-500"
							: "text-blue-500 bg-green-500",
					)}
					type="button"
					onClick={() => {
						scrollLeft(
							(containerRef.current?.scrollWidth ?? 2000) * 0.66,
							250,
							true,
						);
					}}
				>
					IB026
				</button>
			</div>
			<div className="overflow-x-auto" id="scroll" ref={containerRef}>
				<div
					className={clsx(
						styles.container,
						"grid relative grid-cols-2 gap-x-8 justify-items-center my-8 mx-auto sm:gap-16 sm:gap-x-32",
					)}
				>
					<div className={styles.timeline} />
					<div className={styles.time} />

					<div className={clsx(styles.video, "ml-auto")}>
						<YouTube
							videoId="decGVnT9Rj4"
							containerClassName="aspect-w-16 aspect-h-9"
						/>
					</div>
					<div className={clsx(styles.video, "mr-auto")}>
						<YouTube
							videoId="2I2uirLBb68"
							containerClassName="aspect-w-16 aspect-h-9"
						/>
					</div>

					{combined.map((entry, i) => {
						if (entry.sys?.contentType?.sys?.id === "presentation") {
							const local = entry as GatsbyTypes.ContentfulPresentation;

							return (
								<PresentationCard
									key={local.name}
									{...local}
									isLeft={local.room === "IB028"}
									className={clsx(
										local.room === "IB028" ? "ml-auto" : "mr-auto",
									)}
									ref={refs[i]}
								>
									{local.description?.childMdx?.body ?? ""}
								</PresentationCard>
							);
						}
						if (entry.sys?.contentType?.sys?.id === "break") {
							const local = entry as GatsbyTypes.ContentfulBreak;

							return (
								<BreakCard
									key={`${local.startDate}+${local.room}`}
									{...local}
									isLeft={local.room === "IB028"}
									className={clsx(
										local.room === "IB028" ? "ml-auto" : "mr-auto",
									)}
									ref={refs[i]}
								>
									{local.text?.childMdx?.body ?? ""}
								</BreakCard>
							);
						}
						return null;
					})}
					<div className="grid grid-cols-2 col-span-2 justify-items-center w-full">
						<div className="z-10 p-1 -mb-4 w-16 text-lg font-semibold text-center text-blue-500 bg-yellow-500 rounded-md sm:col-span-2">
							18:00
						</div>
						<div className="z-10 p-1 -mb-4 w-16 text-lg font-semibold text-center text-blue-500 bg-yellow-500 rounded-md sm:hidden">
							18:00
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
