<script>
  import Banner from "../components/Banner.svelte";
  import NavBar from "../components/Navbar/Navbar.svelte";
</script>

<header>
  <div class="header">
    <NavBar />
    <Banner />
  </div>
</header>

<style lang="postcss" type="text/postcss">
  .header {
    @apply min-h-screen;
    @apply bg-gray-200;
    @apply dark:bg-gray-800;
  }
</style>
