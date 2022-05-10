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
	class="flex p-4"
>
	<svelte:component
		this={icon}
		class="flex-shrink h-6 w-6 text-purple-600 mr-4"
	/>
	<slot />
</button>

<style lang="postcss" type="text/postcss">
	button {
		@apply m-0;
	}
	.selected {
		@apply border-b-2 border-purple-600 text-purple-600;
	}
</style>
