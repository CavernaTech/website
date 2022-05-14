<script>
    export var href = "#";
    export let icon;
    export let title = "Undefined";
    export let description =
        "Get a better understanding of where your traffic is coming from.";
</script>

<li class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    <a {href} class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
        <svelte:component
            this={icon}
            class="flex-shrink-0 h-6 w-6 text-purple-600"
        />
        <div class="ml-4">
            <p class="text-base font-medium text-gray-900">{title}</p>
            <p class="mt-1 text-sm text-gray-500">
                {description}
            </p>
        </div>
    </a>
</li>
