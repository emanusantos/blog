<script>
	import '../app.css';
</script>

<div class="flex h-dvh">
	<aside
		class="flex flex-col gap-8 h-dvh min-w-80 items-center border-r p-8 text-center bg-gray-100 overflow-hidden"
	>
		<div class="flex flex-col items-center">
			<img
				src="picture.jpg"
				class="w-24 h-24 mb-4 object-cover pixel"
				alt="Uma foto minha (Emanuel Santos)"
			/>
			<h2 class="p-0 m-0">Emanuel Santos</h2>
			<h3 class="p-0 m-0 text-lg">Desenvolvedor Web</h3>
		</div>

		<p class="p-0 m-0 font-light text-lg max-w-72">
			Desenvolvedor na Luby Software, escrevendo sobre desenvolvimento no geral, com foco em web.
		</p>

		<nav class="mt-8">
			<ul>
				<li>
					<a class="text-lg" href="/">Início</a>
				</li>
			</ul>
		</nav>
	</aside>

	<main class="w-full overflow-y-scroll">
		<slot />
	</main>
</div>

<svelte:head>
	<title>Blog | Emanuel Santos</title>
	<meta
		name="description"
		content="Desenvolvedor na Luby Software, escrevendo sobre desenvolvimento no geral, com foco em web."
	/>
</svelte:head>
