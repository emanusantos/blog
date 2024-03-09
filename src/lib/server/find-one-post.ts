import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDir = join(process.cwd(), 'src/posts');

interface PostData {
	layout: 'post';
	date: Date;
	image: string | null;
	title: string;
	description: string;
}

interface GrayMatterOutput {
	data: PostData;
	content: string;
}

export function findOnePost(slug: string) {
	const realSlug = slug.replace(/\.md$/, '');

	const fullPath = join(postsDir, `${realSlug}.md`);

	const fileContents = fs.readFileSync(fullPath, 'utf8');

	const { data, content } = matter(fileContents) as unknown as GrayMatterOutput;

	const date = new Date(data.date);

	return {
		slug: realSlug,
		date,
		frontmatter: { ...data, date },
		content
	};
}
