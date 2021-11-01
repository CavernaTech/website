<script>
  import { InfoIcon } from 'svelte-feather-icons'
  export var href = "";
  export var icon = InfoIcon;
  export var title = "";
</script>

<main>
  <div class="info">
    <div class="ico">
      <svelte:component this={icon} />
    </div>
    <a class="title" {href}>
      {title}
    </a>
  </div>
</main>

<style lang="postcss" type="text/postcss">
  .info {
    @apply flex flex-row h-10 m-2 ml-0;
  }
  .ico {
    @apply w-10 text-gray-100;
  }
  .title {
    @apply w-full text-gray-100 text-xl text-left pl-10 m-auto;
  }
</style>
