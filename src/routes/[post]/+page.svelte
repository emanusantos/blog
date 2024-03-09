<script>
	export let data;
</script>

<div class="post px-28 py-8">
	{@html data.htmlPost}
</div>

<style>
	.post :global(h1),
	.post :global(h2),
	.post :global(h3),
	.post :global(h4),
	.post :global(h5) {
		font-weight: 800;
		letter-spacing: 0.069rem;
		line-height: 1.4;
	}

	.post :global(h1) {
		font-size: 2.8rem;
	}

	.post :global(h2) {
		font-size: 2.1rem;
	}

	.post :global(h3) {
		font-size: 1.6rem;
	}

	.post :global(h4) {
		font-size: 1.4rem;
	}

	.post :global(h5) {
		font-size: 1.2rem;
	}

	.post :global(p),
	.post :global(ol),
	.post :global(ul) {
		margin: 0 auto 1.6rem;
		font-size: 1.25rem;
		font-weight: 300;
		line-height: 1.7;
		letter-spacing: 0.069rem;
	}

	.post :global(h1),
	.post :global(h2),
	.post :global(h3),
	.post :global(h4),
	.post :global(h5) {
		font-weight: 800;
		letter-spacing: 0.069rem;
		line-height: 1.4;
		margin: 2.4rem auto 1rem;
	}

	.post :global(img) {
		display: block;
		width: auto;
		max-width: 100%;
		margin: 1.875rem auto;
	}

	.post :global(ul),
	.post :global(ol) {
		list-style: disc;
		padding-left: 2.5rem;
		margin: 0 auto 1.6rem;
	}

	.post :global(li) {
		padding: 0.625rem 0;

		& > ul {
			margin-bottom: 0;
		}
	}

	.post :global(a) {
		border-bottom: 1px dashed var(--highlight);
		color: var(--highlight);
		text-decoration: none;
		transition: opacity 0.5s;

		&:hover {
			opacity: 0.8;
		}
	}
</style>
