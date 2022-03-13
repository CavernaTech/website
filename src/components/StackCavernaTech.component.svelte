<script>
  import LogosPartner from "../assets/logos-partner/logo-partner.js";
  import CardStack from "./CardStack.component.svelte";
</script>

<section class="pt-20 pb-48">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap justify-center text-center mb-24">
      <div class="w-full lg:w-6/12 px-4">
        <h2 class="text-4xl font-semibold">
          Confira alguma de nossas tecnologias em nossa stack
        </h2>
        <p class="text-lg leading-relaxed m-4 text-gray-500">
          Procuramos manter toda nossa stack bem atualizada, para garantir o que
          a de melhor em cada projeto! E estás são algumas de nossas tecnologias
          presente em nossa stack!
        </p>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="grid grid-cols-12 gap-4">
        {#each LogosPartner as logo}
          <CardStack logos={logo.svg} nome={logo.nome} />
        {/each}
      </div>
    </div>
  </div>
</section>
