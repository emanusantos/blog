<script lang="ts">
	import Github from '$lib/icons/Github.svelte';
	import { isSidebarOpen } from '$lib/writables/sidebar';
	import { linear, quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let sidebar: HTMLElement;

	function handleClickOutside(event: MouseEvent) {
		if (event.target instanceof HTMLElement && sidebar && !sidebar.contains(event.target!)) {
			isSidebarOpen.set(false);
		}
	}
</script>

<svelte:document on:click={handleClickOutside} />

{#key $isSidebarOpen}
	<div
		class="lg:flex lg:w-dvw lg:h-dvh lg:absolute lg:left-0 lg:top-0 lg:z-10 lg:backdrop-blur-sm"
		class:lg:hidden={!$isSidebarOpen}
		transition:slide={{ duration: 300, easing: linear, axis: 'x' }}
	>
		<aside
			bind:this={sidebar}
			class="flex flex-col gap-8 h-dvh min-w-80 items-center border-r p-8 text-center bg-gray-100 lg:absolute lg:z-20 lg:min-w-48 lg:w-64"
		>
			<div class="flex flex-col items-center">
				<img
					src="picture.jpg"
					class="w-24 h-24 mb-4 object-cover pixel"
					alt="Uma foto minha (Emanuel Santos)"
				/>
				<h1 class="p-0 m-0">Emanuel Santos</h1>
			</div>

			<p class="p-0 m-0 font-light text-md max-w-72 lg:text-sm">
				Engenheiro de Software na <a href="https://www.luby.com.br" target="_blank">Luby</a>,
				escrevendo sobre desenvolvimento no geral, com foco em web.
			</p>

			<nav class="mt-8">
				<ul>
					<li>
						<a class="text-md lg:text-sm" href="/">Início</a>
					</li>
				</ul>
			</nav>

			<footer class="mt-auto flex justify-center items-center">
				<a class="border-none" href="https://github.com/emanusantos" target="_blank">
					<div class="w-8 h-8 flex justify-center items-center">
						<Github />
					</div>
				</a>
			</footer>
		</aside>
	</div>
{/key}
