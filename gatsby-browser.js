import "@fontsource/dongle";
import "@fontsource/dongle/700.css";
import "@fontsource/nunito";
// import "@fontsource/inter";
import "./src/styles/core.css";
import "./src/styles/global.scss";
import "./src/styles/utilities.css";

import { MDXProvider } from "@mdx-js/react";
import * as React from "react";

import { A, Br } from "./src/components/customText/CustomText";

const components = {
	br: Br,
	a: A,
};

export const wrapRootElement = ({ element }) => (
	// eslint-disable-next-line react/jsx-filename-extension
	<MDXProvider components={components}>{element}</MDXProvider>
);
