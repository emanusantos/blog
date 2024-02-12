<div class="flex min-h-dvh">
	<aside class="flex flex-col gap-8 w-80 items-center border-r p-8 text-center bg-gray-100">
		<div class="flex flex-col items-center">
			<img
				src="picture.jpg"
				class="w-24 h-24 mb-4 object-cover pixel"
				alt="Uma foto minha (Emanuel Santos)"
			/>
			<h1>Emanuel Santos</h1>
			<h2>Desenvolvedor Web</h2>
		</div>

		<p class=" font-light">
			Desenvolvedor na Luby Software, escrevendo sobre desenvolvimento no geral, com foco em web.
		</p>

		<nav class="mt-8">
			<ul>
				<li>
					<a href="/">Início</a>
				</li>
			</ul>
		</nav>
	</aside>

	<main>main !</main>
</div>

<svelte:head>
	<title>Blog | Emanuel Santos</title>
	<meta
		name="description"
		content="Desenvolvedor na Luby Software, escrevendo sobre desenvolvimento no geral, com foco em web."
	/>
</svelte:head>

<style>
	.pixel {
		overflow-clip-margin: unset;
		overflow: visible;
		clip-path: circle();
	}
</style>
