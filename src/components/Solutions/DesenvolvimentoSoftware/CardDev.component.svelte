<script>
    export let icon = null;
    export var firstText = "Undefined";
    export var secondText = "Undefined";
</script>

<div
    class="relative border-4 rounded-box border-purple-600 mt-10 min-w-full"
>
    <div class="flex p-2 items-center justify-around">
        <div class="">
            <svelte:component this={icon} class="flex-shrink h-10 w-10 text-purple-600 mr-4" />
        </div>
        <div>
            <p class="font-light">{firstText}</p>
            <p class="font-bold">{secondText}</p>
        </div>
    </div>
</div>
