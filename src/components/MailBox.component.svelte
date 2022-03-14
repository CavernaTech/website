<script>
  var mailbox = "assets/MailBox.svg";
</script>

<main>
  <div class="mail-box">
    <div class="contact">
      <a href="#footer">
        <img src={mailbox} alt="Entrar em Contato" />
      </a>
    </div>
  </div>
</main>

<style lang="postcss" type="text/postcss">
  .mail-box {
    @apply flex flex-row h-screen;
  }
  .contact {
    @apply flex flex-wrap content-end;
  }
</style>
