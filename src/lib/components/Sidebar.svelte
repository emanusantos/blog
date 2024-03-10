<script lang="ts">
	import { isSidebarOpen } from '$lib/writables/sidebar';

	let sidebar: HTMLElement;

	function handleClickOutside(event: MouseEvent) {
		if (sidebar && !sidebar.contains(event.target!)) {
			isSidebarOpen.set(false);
		}
	}
</script>

<svelte:document on:click={handleClickOutside} />

<div
	class="lg:flex lg:w-dvw lg:h-dvh lg:absolute lg:left-0 lg:top-0 lg:z-10 lg:backdrop-blur-sm"
	class:lg:hidden={!$isSidebarOpen}
>
	<aside
		bind:this={sidebar}
		class="flex flex-col gap-8 h-dvh min-w-80 items-center border-r p-8 text-center bg-gray-100 lg:absolute lg:z-20 lg:min-w-48 lg:w-64"
		class:lg:hidden={!$isSidebarOpen}
	>
		<div class="flex flex-col items-center">
			<img
				src="picture.jpg"
				class="w-24 h-24 mb-4 object-cover pixel"
				alt="Uma foto minha (Emanuel Santos)"
			/>
			<h1 class="p-0 m-0">Emanuel Santos</h1>
			<h3 class="p-0 m-0">Desenvolvedor Web</h3>
		</div>

		<p class="p-0 m-0 font-light text-md max-w-72 lg:text-sm">
			Desenvolvedor na Luby Software, escrevendo sobre desenvolvimento no geral, com foco em web.
		</p>

		<nav class="mt-8">
			<ul>
				<li>
					<a class="text-md lg:text-sm" href="/">Início</a>
				</li>
			</ul>
		</nav>
	</aside>
</div>
