<script>
	import { isSidebarOpen } from '$lib/writables/sidebar';
	import { linear } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	function handleOpenSidebar() {
		isSidebarOpen.set(true);
	}
</script>

{#key $isSidebarOpen}
	<header
		class="w-full border b bg-gray-100 hidden lg:flex py-4 px-8"
		class:lg:flex={!$isSidebarOpen}
		transition:slide={{ duration: 200, easing: linear, axis: 'y' }}
	>
		<button
			on:click|stopPropagation={handleOpenSidebar}
			class="hidden lg:flex flex-col gap-1 cursor-pointer items-end"
		>
			<div class="w-8 h-[0.4rem] rounded-full bg-gray-500" />
			<div class="w-8 h-[0.4rem] rounded-full bg-gray-500" />
			<div class="w-8 h-[0.4rem] rounded-full bg-gray-500" />
		</button>
	</header>
{/key}
