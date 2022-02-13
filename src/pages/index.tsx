import * as React from "react";

import { Hero } from "@/components/hero/Hero";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

export default function IndexPage() {
	return (
		<Layout>
			<Seo title="2022.04.27." />
			<Hero />
		</Layout>
	);
}
