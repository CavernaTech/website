<script>
    export var imgSrc = null;
    export var altImg = "not defined";
    export var firstText = "Undefined";
    export var secondText = "undefined";
</script>

<div class="flex flex-col items-center">
    {#if typeof imgSrc == typeof String()}
        <img src={imgSrc} alt={altImg} class="h-10" />
    {:else}
        <svelte:component this={imgSrc} class="h-10 text-left" />
    {/if}
    <p class="text-sm font-light text-gray-700">
        {firstText}
    </p>
    <p class="text-lg font-bold text-gray-700">
        {secondText}
    </p>
</div>
