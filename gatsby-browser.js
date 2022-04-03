import "@fontsource/dongle";
import "@fontsource/dongle/700.css";
import "./src/styles/core.css";
import "./src/styles/global.scss";
import "./src/styles/utilities.css";

import { MDXProvider } from "@mdx-js/react";
import * as React from "react";

import { Br } from "./src/components/customText/CustomText";

const components = {
	br: Br,
};

export const wrapRootElement = ({ element }) => (
	// eslint-disable-next-line react/jsx-filename-extension
	<MDXProvider components={components}>{element}</MDXProvider>
);
