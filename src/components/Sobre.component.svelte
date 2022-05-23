<script>
  import { AwardIcon, UsersIcon, CheckIcon } from "svelte-feather-icons";
  var WavesBG = "assets/img/wave-haikei.svg";
</script>

<section class="pb-20 bg-cover -mt-24" style="background-image: url('/assets/img/wave-haikei.svg');" id="sobre">
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
              <AwardIcon />
            </div>
            <h6 class="text-xl font-semibold">Solução On Demand</h6>
            <p class="mt-2 mb-4 ">
              Nossos trabalhos são elaborados e executados com um amplo know-how
              em tecnologias, trabalho em parceria direta com clientes e
              flexibilidade para acessar a equipe.
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
              <CheckIcon />
            </div>
            <h6 class="text-xl font-semibold">Qualidade</h6>
            <p class="mt-2 mb-4 ">
              Desenvolvemos seguindo padrões. Tornamos qualquer aplicação
              escalonável conforme o projeto! <br /> E garantimos código limpo tornando
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
            <p class="mt-2 mb-4 ">
              A capacidade de colaboração é o indicador de sucesso de qualquer
              empresa, com isso nossa equipe e composta com profissionais com a
              experiência certa para atender as mais diversas necessidades do
              mercado!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap items-center mt-32">
      <div class="w-full lg:w-5/12 px-4 mr-auto ml-auto">
        <div
          class="w-72 p-3 text-center inline-flex items-center justify-center mb-6"
        >
          <img src="assets/caverna-tech/logo-dark.svg" alt="" />
        </div>
        <h3 class="text-3xl mb-2 font-light leading-normal">
          Quando nos perguntam, por que
          <span class="text-4xl font-bold"> CavernaTech? </span>
        </h3>
        <p
          class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
        >
          Assim como nas cavernas existem diversos ecossistemas de acordo com
          sua profundidade, nos da CavernaTech também possuímos diversos
          ecossistemas de desenvolvimento.
        </p>
        <p
          class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
        >
          Contamos com equipes especializadas para cada stack, somos rápidos nas
          entregas e capazes de abraçar diferentes mudanças e necessidades.
        </p>
      </div>

      <div class="w-full lg:w-4/12 px-4 mr-auto ml-auto">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-700"
        >
          <img
            alt="..."
            src="assets/img/meeting.jpg"
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
            <h4 class="text-xl font-bold text-white">
              Garantimos serviço de alto nível!
            </h4>
            <p class="text-md font-light mt-2 text-white">
              Através de nossas parcerias para que todas as necessidades dos
              projetos sejam atendidos! Fazendo com que você encontre tudo em um
              só lugar!
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>
