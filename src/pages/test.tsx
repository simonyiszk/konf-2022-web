import { motion, useViewportScroll } from "framer-motion";
import * as React from "react";

import { Hero } from "@/components/hero/Hero";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

export default function TestPage() {
	const { scrollYProgress, scrollY } = useViewportScroll();
	const [pos, setPos] = React.useState(0);

	React.useEffect(() => {
		scrollY.onChange((latest: number) => {
			// console.log(latest);
			setPos(latest);
		});
		return () => {};
	}, [scrollY, scrollYProgress]);

	return (
		<Layout>
			<Seo title="ParallaxTest" />

			<Hero />

			<div className="">
				<div
					className="absolute inset-0 z-10 pointer-events-none select-none"
					aria-hidden
				>
					<motion.div className="fixed" style={{ top: 1080 - pos * 0.5 - 200 }}>
						<img className="" src="/assets/images/Felhő4.svg" alt="" />
					</motion.div>
				</div>

				<div className="container flex flex-col items-center mx-auto">
					<h1 className="font-dongle text-7xl">ParallaxTest</h1>
					{Array(10)
						.fill(0)
						.map(() => {
							return (
								<p className="p-8 text-xl xl:px-32">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Ducimus quasi modi exercitationem voluptatem quas illo quos,
									non praesentium blanditiis a accusamus dicta? Laborum sequi
									quaerat asperiores ullam quisquam quia nostrum! Lorem ipsum
									dolor sit amet, consectetur adipisicing elit. Ducimus quasi
									modi exercitationem voluptatem quas illo quos, non praesentium
									blanditiis a accusamus dicta? Laborum sequi quaerat asperiores
									ullam quisquam quia nostrum! Lorem ipsum dolor sit amet,
									consectetur adipisicing elit. Ducimus quasi modi
									exercitationem voluptatem quas illo quos, non praesentium
									blanditiis a accusamus dicta? Laborum sequi quaerat asperiores
									ullam quisquam quia nostrum!
								</p>
							);
						})}
				</div>
			</div>
		</Layout>
	);
}
