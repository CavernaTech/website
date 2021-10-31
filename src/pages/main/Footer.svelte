<script>
  import Info from "../../components/Info.component.svelte";
  import { InstagramIcon, MailIcon, PhoneIcon } from "svelte-feather-icons";
</script>

<main>
  <div class="footer">
    <div class="section">
      <h3 class="section-title">Entre em contato conosco:</h3>
      <Info
        icon={PhoneIcon}
        href="https://wa.me/5504797402365"
        title="WhatsApp - J. Gabriel G."
      />
      <Info
        icon={PhoneIcon}
        href="https://wa.me/5504792037866"
        title="WhatsApp - Josnei D."
      />
      <Info
        icon={MailIcon}
        href="mailto:jgabrielgruber@hotmail.com"
        title="E-mail - J. Gabriel G."
      />
      <Info
        icon={MailIcon}
        href="mailto:josneidrosdek@gmail.com"
        title="E-mail - Josnei D."
      />
      <Info
        icon={InstagramIcon}
        href="https://www.instagram.com/cavernatech.dev"
        title="Instagram - CavernaTech"
      />
    </div>
    <div class="section">
      <form action="#" class="w-full">
        <h3 class="section-title">Deixe seu contato conosco:</h3>
        <label class="field-label" for="name">Nome</label>
        <input
          id="name"
          type="text"
          placeholder="Ex. Gordon Freeman"
          class="field"
          required
        />
        <label class="field-label" for="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="Ex. gordon@blackmesa.com"
          class="field"
          required
        />
        <label class="field-label" for="tel">Telefone</label>
        <input
          id="tel"
          type="tel"
          placeholder="Telefone"
          class="field"
          required
        />
        <label class="field-label" for="subject">Interesse:</label>
        <select name="subject" id="subject" class="subject">
          <option value="app">Aplicativo</option>
          <option value="platform">Plataforma</option>
          <option value="website">Site</option>
          <option value="portal">Portal</option>
          <option value="iot">Automação</option>
        </select>
        <button class="submit" type="submit">Enviar</button>
      </form>
    </div>
  </div>
</main>

<style lang="postcss" type="text/postcss">
  .footer {
    @apply min-h-full grid md:grid-cols-2 grid-cols-1 gap-2 place-items-stretch;
    @apply bg-gray-800;
  }
  .section {
    @apply p-20;
  }
  .section-title {
    @apply text-gray-100 font-bold text-2xl mb-6;
  }
  .field {
    @apply input w-full;
  }
  .field-label {
    @apply label label-text text-gray-100;
  }
  .subject {
    @apply select w-full;
  }
  .submit {
    @apply btn btn-primary w-full mt-10;
  }
</style>
