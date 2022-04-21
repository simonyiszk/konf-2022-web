import * as React from "react";

import { Footer } from "@/components/footer/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="dark flex flex-col justify-between min-h-screen">
			{/* <Navbar /> */}

			<main className="dark">{children}</main>

			{/* <Footer /> */}
		</div>
	);
}
