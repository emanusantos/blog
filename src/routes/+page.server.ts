import { findAllPosts } from '$lib/server/find-all-posts';

export function load() {
	const posts = findAllPosts();

	return {
		posts
	};
}
