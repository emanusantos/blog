<script lang="ts">
	export let slug: string;
	export let title: string;
	export let description: string;

	export let image: string | null;
</script>

<a href={slug}>
	<article class="w-full flex items-center px-8 pb-4 gap-6 border-b">
		{#if image}
			<img src={image} class="w-28 h-28 object-cover pixel" alt="Uma foto minha (Emanuel Santos)" />
		{/if}

		<div class="flex flex-col justify-center h-32 mt-8">
			<h1>{title}</h1>
			<p>{description}</p>

			<footer class="mt-auto">
				<p class="text-xs text-gray-500 italic">
					{new Date().toLocaleDateString('pt-BR', {
						day: '2-digit',
						month: 'long',
						year: 'numeric'
					})}
				</p>
			</footer>
		</div>
	</article>
</a>
