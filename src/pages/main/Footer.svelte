<script>
import Info from "../../components/Info.component.svelte";

</script>

<main>
  <div class="footer">
    <div class="info">
      <h3>Entre em contato conosco:</h3>
      <Info href="https://wa.me/5504797402365" title="WhatsApp - J. Gabriel G." />
      <Info href="https://wa.me/5504792037866" title="WhatsApp - Josnei D." />
      <Info href="mailto:jgabrielgruber@hotmail.com" title="E-mail - J. Gabriel G." />
      <Info href="mailto:josneidrosdek@gmail.com" title="WhatsApp - Josnei D." />
      <Info href="https://www.instagram.com/cavernatech.dev" title="Instagram - CavernaTech" />
    </div>
    <form action="#" class="form">
      <h3>Deixe seu contato conosco:</h3>
      <input id="name" type="text" placeholder="Nome" />
      <input id="email" type="email" placeholder="E-mail" />
      <input id="tel" type="tel" placeholder="Telefone" />
      <select name="subject" id="subject">
        <option value="app">Aplicativo</option>
        <option value="platform">Plataforma</option>
        <option value="website">Site</option>
        <option value="portal">Portal</option>
        <option value="iot">Automação</option>
      </select>
      <button type="submit">Enviar</button>
    </form>
  </div>
</main>

<style lang="postcss" type="text/postcss">
  .footer {
    @apply flex min-h-screen;
    @apply bg-gray-800;
    @apply dark:bg-gray-800;
  }
  .info {
    @apply flex flex-col w-2/4 p-20;
  }
  .form {
    @apply flex flex-col w-2/4 p-20;
  }
</style>
