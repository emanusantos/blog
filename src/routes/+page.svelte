<script>
	export let data;

	$: console.log(data.posts);
</script>

{#each data.posts as post}
	<p>{post.frontmatter.title}</p>
{/each}
