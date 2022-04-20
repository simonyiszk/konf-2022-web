import clsx from "clsx";
import { motion, useViewportScroll } from "framer-motion";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaBars } from "react-icons/fa";

import navbarContent from "@/data/navbar.json";

import * as styles from "./Navbar.module.scss";

export function Navbar() {
	const [isNavbarOpen, setNavbarOpen] = React.useState(false);
	const [isNavbarVisible, setNavbarVisible] = React.useState(false);
	const { scrollY } = useViewportScroll();
	// const router = useRouter();

	React.useEffect(() => {
		scrollY.onChange((latest: number) => {
			if (latest > 10) {
				if (!isNavbarVisible) setNavbarVisible(true);
			} else {
				if (isNavbarVisible) setNavbarVisible(false);
				if (isNavbarOpen) setNavbarOpen(false);
			}
		});
		return () => {};
	}, [scrollY, isNavbarVisible, isNavbarOpen]);

	function homeButton() {
		setNavbarOpen(false);
		window.scrollTo(0, 0);
		// if (router.pathname !== "/") {
		// 	router.push("/");
		// }
	}

	const variants = {
		initial: {
			"--after-w": "-5%",
			rotation: 0.001,
		},
		hover: {
			"--after-w": "100%",
			rotation: 0.001,
		},
	};

	return (
		<header
			className={clsx(styles.header)}
			// style={{ willChange: "background-color" }}
			// animate={{
			// 	backgroundColor: isNavbarVisible
			// 		? "rgba(39, 51, 67, 1)"
			// 		: "rgba(39, 51, 67, 0)",
			// }}
			id="header"
		>
			<div className="flex relative flex-wrap justify-start items-center px-2 mx-auto w-full sm:px-8">
				<div className="flex relative justify-between w-full sm:block sm:static sm:justify-start sm:w-auto">
					<span
						className="flex items-center mr-4 text-2xl no-underline cursor-pointer lg:text-4xl lg:leading-10"
						onClick={homeButton}
						onKeyPress={homeButton}
						role="button"
						tabIndex={0}
					>
						<span className="inline-block relative my-4 mx-2 w-20 h-auto">
							<StaticImage src="../../assets/images/logo.png" alt="XIX Logó" />
						</span>
					</span>

					<button
						className="block py-2 px-3 text-xl leading-none bg-transparent rounded border border-transparent border-solid outline-none focus:outline-none cursor-pointer sm:hidden"
						type="button"
						onClick={() => setNavbarOpen(!isNavbarOpen)}
						aria-label="Navbar toggler"
					>
						<FaBars />
					</button>
				</div>
				<nav
					className={clsx(
						"z-50 items-center w-full sm:flex sm:w-auto",
						isNavbarOpen ? "flex" : "hidden",
					)}
				>
					<ul className="flex flex-col w-full list-none rounded-lg sm:flex-row sm:ml-auto sm:w-auto">
						{navbarContent.links.map(({ href, label }, i) => (
							<li key={`${href}`} className="py-1 pl-2 w-full sm:pl-0">
								<Link
									to={href}
									role="link"
									tabIndex={i}
									className={clsx(
										styles.navlink,
										"inline-block p-2 w-full text-xl font-normal hover:text-primary-200 lowercase cursor-pointer sm:px-5 sm:text-2xl",
										i === 0 && "sm:pl-2",
										i === navbarContent.links.length - 1 && "sm:pr-2",
									)}
									onClick={() => setNavbarOpen(false)}
									onKeyPress={() => setNavbarOpen(false)}
								>
									<motion.p
										// @ts-expect-error: Variants work, I don't know why it is an error
										variants={variants}
										initial="initial"
										whileHover="hover"
										whileFocus="hover"
										transition={{ duration: 0.3 }}
									>
										{label}
									</motion.p>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
