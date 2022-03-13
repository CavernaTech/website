<script>
  import {
    AwardIcon,
    FeatherIcon,
    UsersIcon,
    CodeIcon,
    CpuIcon,
  } from "svelte-feather-icons";
</script>

<section class="pb-20 bg-gray-200 -mt-24">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap">
      <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="px-4 py-5 flex-auto">
            <div
              class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
            >
              <FeatherIcon />
            </div>
            <h6 class="text-xl font-semibold">Solucao On Demand</h6>
            <p class="mt-2 mb-4 text-blueGray-500">
              Traga sua ideia ou necessidade e desenvolvemos ela com os melhores
              profissionais!
            </p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-4/12 px-4 text-center">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="px-4 py-5 flex-auto">
            <div
              class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-700"
            >
              <AwardIcon />
            </div>
            <h6 class="text-xl font-semibold">Qualidade</h6>
            <p class="mt-2 mb-4 text-blueGray-500">
              Desenvolvemos seguindo padrões. Tornamos qualquer aplicação
              escalonável conforme o projeto! E garantimos código limpo tornando
              qualquer projeto mais leve e otimizado.
            </p>
          </div>
        </div>
      </div>

      <div class="pt-6 w-full md:w-4/12 px-4 text-center">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="px-4 py-5 flex-auto">
            <div
              class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-600"
            >
              <UsersIcon />
            </div>
            <h6 class="text-xl font-semibold">Melhor Equipe</h6>
            <p class="mt-2 mb-4 text-blueGray-500">
              Nossa equipa e composta com profissionais com a experiência certa
              para atender as mais diversas necessidades!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap items-center mt-32">
      <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <div
          class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-purple-500"
        >
          <CodeIcon />
        </div>
        <h3 class="text-3xl mb-2 font-semibold leading-normal">
          Desenvolvimento Flexível
        </h3>
        <p
          class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
        >
          A CavernaTech conta com uma stack de desenvolvimento ampla,
          tornando-nos capaz de atender as mais variadas necessidades do
          mercado.
        </p>
        <p
          class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
        >
          Contamos com equipes compostas com os profissionais certos para cada
          projeto. Disponibilizamos em cada equipe, Engenheiro de Software e
          desenvolvedores especializados de acordo com cada stack!
        </p>
      </div>

      <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-400"
        >
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            class="w-full align-middle rounded-t-lg"
          />
          <blockquote class="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              class="absolute left-0 w-full block h-95-px -top-94-px"
            >
              <polygon
                points="-30,95 583,95 583,95"
                class="text-red-400 fill-current"
              />
            </svg>
            <h4 class="text-xl font-bold text-white">Serviço de alto nível.</h4>
            <p class="text-md font-light mt-2 text-white">
              Contamos também com parcerias para que todas as necessidades dos
              projetos sejam atendidas! Fazendo com que você encontre tudo em um
              só lugar!
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>
