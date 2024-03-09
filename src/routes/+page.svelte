<script>
	import Post from '$lib/components/Post.svelte';

	export let data;
</script>

{#each data.posts as post}
	<Post
		slug={post.slug}
		title={post.frontmatter.title}
		description={post.frontmatter.description}
		image={post.frontmatter.image}
	/>
{/each}
