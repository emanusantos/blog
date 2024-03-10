<script>
	import { goto } from '$app/navigation';

	export let data;

	function handleGoBack() {
		goto('../');
	}
</script>

<svelte:head>
	<title>{data.post.frontmatter.title} - Emanuel Santos</title>
	<meta name="description" content={data.post.frontmatter.description} />
</svelte:head>

<main class="px-28 py-8 lg:px-8 lg:py-4">
	<header>
		<button on:click={handleGoBack}>
			<p class="pt-10 text-sm text-[#232BDD]"><strong class="text-[#232BDD]">←</strong> Voltar</p>
		</button>

		<div class="pt-4 pb-2 flex flex-col gap-4 w-full border-b">
			<h1 class="title">{data.post.frontmatter.title}</h1>

			<div
				class="flex justify-between items-end w-full overflow-hidden lg:flex-col lg:items-start lg:gap-2"
			>
				<h3 class="lg:text-xs max-w-[50%] break-words lg:max-w-full">
					{data.post.frontmatter.description}
				</h3>

				<h3 class=" lg:text-xs">
					<em class="text-gray-500">
						{data.post.frontmatter.date.toLocaleDateString('pt-BR', {
							day: '2-digit',
							month: 'long',
							year: 'numeric'
						})}
					</em>
				</h3>
			</div>
		</div>
	</header>

	<div class="post">
		{@html data.htmlPost}
	</div>
</main>

<style>
	.title {
		font-size: 3rem;
		line-height: 2.5rem;

		@media (max-width: 1024px) {
			font-size: 2.2rem;
		}
	}

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

		@media (max-width: 1024px) {
			font-size: 1.8rem;
		}
	}

	.post :global(h2) {
		font-size: 2.1rem;

		@media (max-width: 1024px) {
			font-size: 1.4rem;
		}
	}

	.post :global(h3) {
		font-size: 1.6rem;

		@media (max-width: 1024px) {
			font-size: 0.8rem;
		}
	}

	.post :global(h4) {
		font-size: 1.4rem;

		@media (max-width: 1024px) {
			font-size: 0.7rem;
		}
	}

	.post :global(h5) {
		font-size: 1.2rem;

		@media (max-width: 1024px) {
			font-size: 0.6rem;
		}
	}

	.post :global(p),
	.post :global(ol),
	.post :global(ul) {
		margin: 0 auto 1.6rem;
		font-size: 1.25rem;
		font-weight: 300;
		line-height: 1.7;
		letter-spacing: 0.069rem;

		@media (max-width: 1024px) {
			font-size: 0.9rem;
		}
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
</style>
