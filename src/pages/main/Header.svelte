<script>
  import Logo from "../../components/Logo.component.svelte";
  var mailbox = "src/assets/MailBox.svg";
</script>

<main>
  <div class="header">
    <div class="partners" />
    <div class="main">
      <Logo />
      <div class="contact">
        <a href="#footer">
          <img src={mailbox} alt="Entrar em Contato" />
        </a>
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
  .contact {
    @apply flex flex-wrap content-end w-1/5;
  }
  .projects {
    @apply w-1/5;
  }
</style>
