import fs from 'fs';

import { join } from 'path';
import { findOnePost } from './find-one-post';

const postsDir = join(process.cwd(), 'src/posts');

export function findAllPosts() {
	const slugs = fs.readdirSync(postsDir);

	const posts = slugs.map(findOnePost);

	return posts;
}
