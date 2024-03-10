<script>
	import { isSidebarOpen } from '$lib/writables/sidebar';

	function handleOpenSidebar() {
		isSidebarOpen.set(true);
	}
</script>

<header
	class="w-full border b bg-gray-100 hidden lg:flex py-4 px-8"
	class:lg:flex={!$isSidebarOpen}
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
