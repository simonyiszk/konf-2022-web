import * as React from "react";

import * as styles from "./Stars.module.scss";

export function Stars() {
	return (
		<div className="sticky top-0 w-full select-none" aria-hidden>
			<div className="overflow-hidden absolute mt-[-50vh] w-full h-[2000px] text-primary-200">
				<div className={styles.stars} />
				<div className={styles.stars2} />
				<div className={styles.stars3} />
			</div>
		</div>
	);
}
