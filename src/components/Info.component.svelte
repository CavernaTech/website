<script>
  export var href = "";
  export var icon = "";
  export var title = "";
</script>

<main>
  <a class="info" href={href}>
    <div class="ico">
      <img src={icon} alt="icone">
    </div>
    <div class="title">
      <h3>{title}</h3>
    </div>
  </a>
</main>

<style lang="postcss" type="text/postcss">
  .info {
    @apply flex flex-row;
  }
  .ico {
    @apply w-1/5 h-10;
  }
  .title {
    @apply w-4/5 h-10;
  }

</style>
