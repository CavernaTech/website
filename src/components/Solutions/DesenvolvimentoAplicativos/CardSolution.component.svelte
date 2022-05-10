<script>
    export var imgSrc = "";
    export var altImg = "not defined";
    export var firstText = "Undefined";
    export var secondText = "undefined";
</script>

<div>
    <img
        src={imgSrc}
        alt={altImg}
        class="h-10"
    />
    <p class="text-sm font-light text-gray-700">
        {firstText}
    </p>
    <p class="text-lg font-bold text-gray-700">
        {secondText}
    </p>
</div>