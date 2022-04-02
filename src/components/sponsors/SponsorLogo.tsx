import clsx from "clsx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";

import { CMSImage } from "../cmsImage/CMSImage";
import * as styles from "./SponsorLogo.module.scss";

type SponsorLogoProps = React.HTMLProps<HTMLDivElement> &
	GatsbyTypes.ContentfulSponsorLogo;

function ConditionalWrapper({
	condition,
	renderWrapper: wrapper,
	children,
}: {
	condition: boolean;
	renderWrapper: (arg0: JSX.Element) => JSX.Element;
	children: JSX.Element;
}) {
	return condition ? wrapper(children) : children;
}

export function SponsorLogo({
	image,
	name = "",
	link,
	...restProps
}: SponsorLogoProps) {
	if (!image || !image.file) {
		return null;
	}
	const imageData = image.gatsbyImageData && getImage(image.gatsbyImageData);
	return (
		<ConditionalWrapper
			condition={!!link}
			renderWrapper={(children) => (
				<a
					href={link}
					// className={styles.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{children}
				</a>
			)}
		>
			<div className={clsx(styles.container, restProps.className)}>
				<CMSImage
					alt="name"
					gatsbyImageData={imageData}
					file={image?.file}
					svg={image?.svg}
				/>
			</div>
		</ConditionalWrapper>
	);
}
