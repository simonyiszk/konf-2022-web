export function parseYoutubeIdFromLink(url: string) {
	const regex =
		/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/;
	const parsed = url.match(regex);
	if (parsed) return parsed[1];
	return undefined;
}

export function orderEntriesByDate(
	a: GatsbyTypes.ContentfulPresentation | GatsbyTypes.ContentfulBreak,
	b: GatsbyTypes.ContentfulPresentation | GatsbyTypes.ContentfulBreak,
): number {
	if (!a.startDate || !b.startDate) return 0;
	if (a.startDate === b.startDate) {
		if (!!a.room && !!b.room) {
			return a.room.localeCompare(b.room) * -1;
		}
		return 0;
	}
	return Date.parse(a.startDate) - Date.parse(b.startDate);
}
