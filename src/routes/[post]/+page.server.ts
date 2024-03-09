import { findOnePost } from '$lib/server/find-one-post.js';
import { markdownToHtml } from '$lib/server/markdown-to-html.js';

export function load({ params }) {
	const post = findOnePost(params.post);

	const htmlPost = markdownToHtml(post.content);

	return {
		post,
		htmlPost
	};
}
