export function parseYoutubeIdFromLink(url: string) {
	const regex =
		/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/;
	const parsed = url.match(regex);
	if (parsed) return parsed[1];
	return undefined;
}
