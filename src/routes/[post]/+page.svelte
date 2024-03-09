<script>
	export let data;
</script>

<div class="post">
	{@html data.htmlPost}
</div>

<style>
	.post :global(h2) {
		color: red;
	}
</style>
