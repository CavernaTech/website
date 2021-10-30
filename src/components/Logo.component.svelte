<script>
  var logo = "src/assets/CavernaTech_dark.svg";
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    logo = "src/assets/CavernaTech.svg";
  }
</script>

<main>
  <div class="logo">
    <div class="caverna">
      <img src={logo} alt="CavernaTech" />
    </div>
  </div>
</main>

<style lang="postcss" type="text/postcss">
  .logo {
    @apply flex flex-row h-screen;
  }
  .caverna {
    @apply flex flex-wrap content-end;
  }
</style>
