<script>
  import MailBox from "../../components/MailBox.component.svelte";
  import Logo from "../../components/Logo.component.svelte";
</script>

<main>
  <div class="header">
    <div class="partners" />
    <div class="main">
      <div class="logo">
        <Logo />
      </div>
      <div class="mail-box">
        <MailBox />
      </div>
    </div>
    <div class="projects" />
  </div>
</main>

<style lang="postcss" type="text/postcss">
  .header {
    @apply flex h-screen;
    @apply bg-gray-200;
    @apply dark:bg-gray-800;
  }
  .partners {
    @apply w-1/5;
  }
  .main {
    @apply flex flex-row w-3/5;
  }
  .logo {
    @apply w-4/5;
  }
  .mail-box {
    @apply w-1/5;
  }
  .projects {
    @apply w-1/5;
  }
</style>
