import { findAllPosts } from '$lib/server/find-all-posts.js';
import { findOnePost } from '$lib/server/find-one-post.js';
import { markdownToHtml } from '$lib/server/markdown-to-html.js';

export function entries() {
	const posts = findAllPosts();

	return posts.map((post) => ({ post: post.slug }));
}

export function load({ params }) {
	const post = findOnePost(params.post);

	const htmlPost = markdownToHtml(post.content);

	return {
		post,
		htmlPost
	};
}
