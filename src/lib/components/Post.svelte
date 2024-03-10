<script lang="ts">
	export let slug: string;
	export let title: string;
	export let description: string;
	export let date: Date;
</script>

<a class="text-inherit" href={slug}>
	<article class="w-full flex items-center px-8 pb-4 gap-6 border-b group hover:text-[#232bdd]">
		<div class="flex flex-col justify-center h-32 mt-8">
			<h1 class="group-hover:text-[#232bdd]">{title}</h1>
			<p class="group-hover:text-[#232bdd]">{description}</p>

			<footer class="mt-auto">
				<p class="text-xs italic text-gray-500 group-hover:text-[#232bdd]">
					{date.toLocaleDateString('pt-BR', {
						day: '2-digit',
						month: 'long',
						year: 'numeric'
					})}
				</p>
			</footer>
		</div>
	</article>
</a>
