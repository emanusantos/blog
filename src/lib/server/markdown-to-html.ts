import showdown from 'showdown';

export function markdownToHtml(markdown: string) {
	const converter = new showdown.Converter();

	return converter.makeHtml(markdown);
}
