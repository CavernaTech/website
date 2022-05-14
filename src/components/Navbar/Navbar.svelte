<script>
  var logo = "assets/caverna-tech/logo.svg";

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    logo = "assets/caverna-tech/logo-dark.svg";
  }
  var Bars = "assets/icons/bar.svg";
  var whatsappIcon = "assets/icons/outline/whatsapp.svg";

  import {
    PhoneIcon,
    ChevronDownIcon,
    CodeIcon,
    SmartphoneIcon,
    GitMergeIcon,
    RefreshCcwIcon,
    GridIcon,
  } from "svelte-feather-icons";

  import ItemList from "./ItemList.svelte";
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <button tabindex="0" class="btn btn-ghost md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>
      <div
        class="absolute z-10 -ml-4 mt-5 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 dropdown-content"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 h-screen overflow-scroll bg-gray-50"
        >
          <ItemList
            href="#solucoes"
            icon={SmartphoneIcon}
            title="Desenvolvimento de Aplicativos"
            description="Desenvolvimento de aplicativos personalizado com a tecnologia certa, para atingir suas metas de negócios e encantar seus clientes."
          />
          <ItemList
            href="#solucoes"
            icon={CodeIcon}
            title="Desenvolvimento de Software"
            description="Desenvolvimento de software personalizado com a tecnologia certa, para atingir suas metas de negócios e encantar seus clientes."
          />
          <ItemList
            href="#solucoes"
            icon={GridIcon}
            title="Integrações"
            description="Conecte vários sistemas, fontes de dados e aplicativos sob o mesmo teto digital para atender às crescentes demandas de negócios e gerenciar sua operação sem problemas."
          />
          <ItemList
            href="#solucoes"
            icon={GitMergeIcon}
            title="Outsourcing IT"
            description="Resolva os desafios de falta de talentos em tecnologia com nossa equipe de soluções dedicada para empresas e startups em crescimento."
          />

          <div
            class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
          >
            <div class="flow-root">
              <a
                href="https://wa.me/55047997402365"
                target="_blank"
                class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                <img
                  src={whatsappIcon}
                  alt="whatsapp"
                  class="flex-shrink-0 h-6 w-6 text-gray-400"
                />
                <span class="ml-3">WhatsApp</span>
              </a>
            </div>
            <div class="flow-root">
              <a
                href="#contact-id"
                class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                <PhoneIcon strokeWidth={2} size={"20"} />
                <span class="ml-3">Contate-nos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <a href="http://#">
        <img class="h-8 w-auto sm:h-14" src={logo} alt="" />
      </a>
    </div>
  </div>

  <div class="navbar-center hidden md:flex">
    <div class="flex p-0 flex-row">
      <div class="mr-4">
        <a
          href="#intro-id"
          class="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          CavernaTech
        </a>
      </div>
      <div class="relative dropdown">
        <button
          type="button"
          class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-expanded="false"
        >
          <span>Soluções</span>
          <ChevronDownIcon size={"20"} strokeWidth={2} />
        </button>
        <div
          class="z-10 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 dropdown-content"
        >
          <div
            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <ItemList
              href="#solucoes"
              icon={SmartphoneIcon}
              title="Desenvolvimento de Aplicativos"
              description="Desenvolvimento de aplicativos personalizado com a tecnologia certa, para atingir suas metas de negócios e encantar seus clientes."
            />
            <ItemList
              href="#solucoes"
              icon={CodeIcon}
              title="Desenvolvimento de Software"
              description="Desenvolvimento de software personalizado com a tecnologia certa, para atingir suas metas de negócios e encantar seus clientes."
            />
            <ItemList
              href="#solucoes"
              icon={GridIcon}
              title="Integrações"
              description="Conecte vários sistemas, fontes de dados e aplicativos sob o mesmo teto digital para atender às crescentes demandas de negócios e gerenciar sua operação sem problemas."
            />
            <ItemList
              href="#solucoes"
              icon={RefreshCcwIcon}
              title="Automação"
              description="Criamos plataformas de controle de automação, geramos dados através dos dados coletados e criamos formas inteligentes de gerenciar sua operação, gerando resultados de verdade para sua empresa."
            />
            <ItemList
              href="#solucoes"
              icon={GitMergeIcon}
              title="Outsourcing IT"
              description="Resolva os desafios de falta de talentos em tecnologia com nossa equipe de soluções dedicada para empresas e startups em crescimento."
            />

            <div
              class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
            >
              <div class="flow-root">
                <a
                  href="https://wa.me/55047997402365"
                  target="_blank"
                  class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                >
                  <img
                    src={whatsappIcon}
                    alt="whatsapp"
                    class="flex-shrink-0 h-6 w-6 text-gray-400"
                  />
                  <span class="ml-3">WhatsApp</span>
                </a>
              </div>
              <div class="flow-root">
                <a
                  href="#contact-id"
                  class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                >
                  <PhoneIcon strokeWidth={2} size={"20"} />
                  <span class="ml-3">Contate-nos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar-end">
    <a href="#contato" class="btn">Entrar em contato</a>
  </div>
</div>
