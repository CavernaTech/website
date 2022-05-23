<script>
  import TermsController from "../controllers/terms.controller";
  import ContatoController from "../controllers/contato.controller";
  import ContatoModel from "../models/contato.model";
  import Terms from "./Terms.component.svelte";

  let email = "";
  let name = "";
  let tel = "";
  let subject = "app";
  let message = "";

  let agreed = TermsController.isAgreed();
  let whenAgreed = TermsController.whenAgreed();

  const handleAgreement = TermsController.agreeTerms;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contato = new ContatoModel({
      email,
      name,
      tel,
      subject,
      message,
    });
    if (await ContatoController.addContato(contato)) {
      alert("Contato salvo!");
    } else {
      alert("Tivemos um problema ao salvar seu contato...");
    }
  };
</script>

<section class="relative block bg-gray-800 pt-12" id="contato">
  <div
    class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
    style="transform: translateZ(0);"
  >
    <svg
      class="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        class="text-gray-800 fill-current"
        points="2560 0 2560 100 0 100"
      />
    </svg>
  </div>

  <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
    <form action="#" class="w-full" on:submit={handleSubmit}>
      <h4 class="section-title text-center">Entramos em contato!</h4>
      <p class="sub-section-title text-center">
        Ficou interessado e quer saber mais? Preencha este formulário e
        retornaremos em 24 horas!
      </p>
      <div class="flex w-full space-x-10">
        <div class="w-4/5">
          <label class="field-label" for="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Ex. Gordon Freeman"
            class="field"
            required
            bind:value={name}
          />
        </div>
        <div class="w-2/5">
          <label class="field-label" for="tel">Telefone</label>
          <input
            id="tel"
            type="tel"
            placeholder="Telefone"
            class="field"
            required
            bind:value={tel}
          />
        </div>
      </div>
      <form class="max-w-md" />
      <label class="field-label" for="email">E-mail</label>
      <input
        id="email"
        type="email"
        placeholder="Ex. gordon@blackmesa.com"
        class="field"
        required
        bind:value={email}
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
          bind:value={message}
        />
      {/if}
      <div class="mt-5">
        <Terms bind:agreed onAgreement={handleAgreement} bind:whenAgreed />
      </div>
      <button class="submit mb-20" disabled={!agreed} type="submit">
        Enviar
      </button>
    </form>
  </div>
</section>

<style lang="postcss" type="text/postcss">
  .section {
    @apply p-20;
  }
  .section-title {
    @apply text-gray-100 text-5xl font-semibold;
  }
  .sub-section-title {
    @apply leading-relaxed mt-1 mb-4 text-gray-400;
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
  .submit:disabled {
    @apply btn w-full mt-10 btn-disabled text-gray-500;
  }
  .copyright {
    @apply pb-10 pl-20 flex flex-row text-gray-100 text-xl font-bold align-middle;
  }
  .logo {
    @apply h-8;
  }
</style>
