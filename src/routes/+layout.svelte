<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Topbar from '$lib/components/Topbar.svelte';
	import '../app.css';
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
