<script>
	import { getContext } from "svelte";
	import { TABS } from "./Tabs.svelte";

	export let icon = null;

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<button
	class:selected={$selectedTab === tab}
	on:click={() => selectTab(tab)}
	class="p-4 text-left w-full flex"
>
	<svelte:component
		this={icon}
		class="h-6 w-6 mr-4"
	/>
	<slot />
</button>

<style lang="postcss" type="text/postcss">
	button {
		@apply m-0 text-gray-500 whitespace-nowrap;
	}
	.selected {
		@apply border-b-2 border-purple-600 text-purple-600;
	}
</style>
