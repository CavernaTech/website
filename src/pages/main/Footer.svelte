<script>
  import Info from "../../components/Info.component.svelte";
  import {
    InstagramIcon,
    MailIcon,
    MapPinIcon,
    PhoneIcon,
    SendIcon,
  } from "svelte-feather-icons";
  const logo = "src/assets/CavernaTech.svg";

  let subject = "app";
</script>

<main>
  <div class="footer">
    <div class="contact">
      <div class="section">
        <div class="sub-section">
          <div>
            <h3 class="section-title">Entre em contato conosco:</h3>
            <div class="sub-section-content">
              <Info
                icon={SendIcon}
                href="https://wa.me/5504792037866"
                title="WhatsApp - J. Gabriel G."
              />
              <Info
                icon={SendIcon}
                href="https://wa.me/5504797402365"
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
          </div>
          <div>
            <h3 class="section-title">Nossa sede:</h3>
            <div class="sub-section-content">
              <Info
                icon={MapPinIcon}
                href="https://goo.gl/maps/EXYdGyEHcU3xUaS46"
                title="Tv. Teodoro Koch, 30 - Centro, São Bento do Sul, Santa Catarina, Brasil"
              />
              <Info
                icon={PhoneIcon}
                href="tel:5504735128833"
                title="+55 (47) 3512 8833"
              />
            </div>
          </div>
        </div>
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
          {#if subject != "other"}
            <select
              name="subject"
              id="subject"
              class="subject"
              bind:value={subject}
            >
              <option value="app">Aplicativo</option>
              <option value="platform">Plataforma</option>
              <option value="website">Site</option>
              <option value="portal">Portal</option>
              <option value="iot">Automação</option>
              <option value="other">Outro... (Informar)</option>
            </select>
          {:else}
            <textarea
              name="subject"
              id="subject"
              class="textarea w-full"
              placeholder="Ex. Gostaria de uma solução completa!"
              rows="5"
            />
          {/if}
          <button class="submit" type="submit">Enviar</button>
        </form>
      </div>
    </div>
    <div class="copyright">
      <img src={logo} alt="Logo" class="logo" />
      <span>
        &#169; CavernaTech {new Date().getFullYear()}
      </span>
    </div>
  </div>
</main>

<style lang="postcss" type="text/postcss">
  .footer {
    @apply bg-gray-800 flex flex-col;
  }
  .contact {
    @apply min-h-full grid md:grid-cols-2 grid-cols-1 gap-2 place-items-stretch;
  }
  .section {
    @apply p-20;
  }
  .section-title {
    @apply text-gray-100 font-bold text-2xl mb-6;
  }
  .sub-section {
    @apply grid grid-rows-1 gap-10 place-items-stretch;
  }
  .sub-section-content {
    @apply grid grid-cols-1 xl:grid-cols-2;
  }
  .field {
    @apply input w-full;
  }
  .field-label {
    @apply label label-text text-gray-100 text-lg;
  }
  .subject {
    @apply select w-full;
  }
  .submit {
    @apply btn btn-primary w-full mt-10;
  }
  .copyright {
    @apply pb-10 pl-20 flex flex-row text-gray-100 text-xl font-bold align-middle;
  }
  .logo {
    @apply h-8;
  }
</style>
