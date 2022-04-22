import clsx from "clsx";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";

import * as styles from "./CMSParagraph.module.scss";

export type CMSParagraphProps = {
	content?: GatsbyTypes.ContentfulParagraph;
};

export function CMSParagraph({ content }: CMSParagraphProps) {
	if (!content?.content?.childMdx?.body) {
		return null;
	}
	return (
		<section
			className={clsx("prose prose-orange dark:prose-invert", styles.section)}
			id={content?.name}
		>
			<div className="max-w-[120ch]">
				<MDXRenderer>{content.content.childMdx.body}</MDXRenderer>
			</div>
		</section>
	);
}
