import * as React from "react";

import { Organizer } from "@/components/contacts/Organizer";

type ContactsProps = {
	organizers: readonly GatsbyTypes.ContentfulOrganizer[];
};

export function Contacts({ organizers }: ContactsProps) {
	return (
		<section className="flex flex-col items-center" id="kapcsolat">
			<h2 className="mb-10 text-4xl font-semibold">Kapcsolat</h2>
			<div className="flex flex-wrap justify-evenly items-center w-full">
				{organizers.map((organizer) => {
					const checkedOrganizer = {
						name: organizer.name ?? "",
						title: organizer.title ?? "",
						email: organizer.email ?? "",
						image: organizer.image,
					};
					return (
						<Organizer key={checkedOrganizer.name} {...checkedOrganizer} />
					);
				})}
			</div>
		</section>
	);
}
