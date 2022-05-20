<div class="tab-list">
	<slot />
</div>

<style lang="postcss" type="text/postcss">
	.tab-list {
		@apply border-b-2 border-purple-600;
		@apply flex flex-nowrap mx-auto overflow-x-auto;
	}
</style>
