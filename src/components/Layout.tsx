import * as React from "react";

export function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			{/* <Navbar /> */}

			<main>{children}</main>

			{/* <Footer /> */}
		</div>
	);
}
