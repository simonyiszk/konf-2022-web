import clsx from "clsx";
import * as React from "react";

import * as styles from "./Teaser.module.scss";

export function Teaser() {
	return (
		<div className={clsx(styles.bg)}>
			<div className="flex relative flex-col justify-center items-center mx-auto w-fit h-screen">
				<h1 className="text-2xl font-bold text-center sm:text-4xl lg:text-6xl">
					XIX. Simonyi Konferencia
				</h1>
				<hr className="mt-2 mb-1 w-full border-b border-gray-700 sm:mt-6 sm:mb-5" />
				<div className="flex flex-row justify-between w-full text-lg sm:text-xl lg:text-3xl">
					<h2>2022.04.27.</h2> - <h3>BME</h3>
				</div>
			</div>
		</div>
	);
}
