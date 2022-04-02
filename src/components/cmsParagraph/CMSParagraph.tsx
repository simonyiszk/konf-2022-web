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
		<section className={styles.section} id={content?.name}>
			<MDXRenderer>{content.content.childMdx.body}</MDXRenderer>
		</section>
	);
}
