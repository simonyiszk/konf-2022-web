import * as React from "react";

import * as styles from "./CustomText.module.scss";

export function Br() {
	return <br />;
}

export function A({
	children,
	...restProps
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<a target="_blank" rel="noopener noreferrer" {...restProps}>
			{children}
		</a>
	);
}
