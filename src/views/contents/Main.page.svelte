<script>
  import StackCavernaTech from "../../components/StackCavernaTech/StackCavernaTech.component.svelte";
  import Contact from "../../components/Contact.component.svelte";
  import Sobre from "../../components/Sobre.component.svelte";
import IntroCavernaTech from "../../components/IntroCavernaTech.component.svelte";
</script>

<main>
  <div
    class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen"
  >
    <div
      class="absolute top-0 w-full h-full bg-center bg-cover"
      style="
        background-image: url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80);
      "
    >
      <span
        id="blackOverlay"
        class="w-full h-full absolute opacity-75 bg-black"
      />
    </div>
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="pr-12">
            <h1 class="text-white font-semibold text-5xl">
              Nao deixe sua empresa para tras!
            </h1>
            <p class="mt-4 text-lg text-white">
              A capacidade de inovar é determinante para a competitividade das
              empresas!<br />
              Sabendo disso a CavernaTech possui a mais diversa stack de desenvolvimento
              para atender as mais diversas necessidades do mercado, atendemos desde
              de solucoes web, aplicativos, sistemas ate automacao industrial!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <IntroCavernaTech />
  <Sobre />
  <StackCavernaTech />
  <Contact />
</main>

<style>
</style>
