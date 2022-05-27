<script>
    export var img = null;
    export var title = "Undefined Title";
    export var description = "Undefined Descripition";
    export var seq = "";
</script>

<div class="hero bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
        <div>
            <h1 class="text-7xl font-bold font-serif">{seq}.</h1>
        </div>
        <img
            src={img}
            style="max-width: 20%;"
            class="rounded-lg shadow-2xl"
            alt=""
        />
        <div>
            <h1 class="text-2xl font-bold">{title}</h1>
            <p class="py-6 text-sm">
                {description}
            </p>
        </div>
    </div>
</div>
