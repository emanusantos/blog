<script>
	import { navigating } from '$app/stores';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Topbar from '$lib/components/Topbar.svelte';
	import { isSidebarOpen } from '$lib/writables/sidebar';
	import '../app.css';

	$: if ($navigating) isSidebarOpen.set(false);
</script>

<Topbar />

<div class="flex h-dvh">
	<Sidebar />

	<main class="w-full overflow-y-auto">
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
