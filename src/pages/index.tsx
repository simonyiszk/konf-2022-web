import * as React from "react";

import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Teaser } from "@/components/teaser/Teaser";

export default function IndexPage() {
	return (
		<Layout>
			<Seo title="Hamarosan..." />
			<Teaser />
		</Layout>
	);
}
