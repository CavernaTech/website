<script>
  var logo = "assets/caverna-tech/logo.svg";

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    logo = "assets/caverna-tech/logo-dark.svg";
  }
  var Bars = "assets/icons/bar.svg";

  import {
    PhoneIcon,
    ChevronDownIcon,
    CodeIcon,
    SmartphoneIcon,
    GitMergeIcon,
    RefreshCcwIcon,
    GridIcon,
    MenuIcon,
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
        class="absolute z-10 mt-5 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 dropdown-content"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 h-screen overflow-scroll"
        >
          <ItemList
            href="#contact-id"
            icon={SmartphoneIcon}
            title="Desenvolvimento de Aplicativos"
            description="Desenvolvimento de aplicativos personalizado com a tecnologia certa, para atingir suas metas de negócios e encantar seus clientes."
          />
          <ItemList
            href="#"
            icon={CodeIcon}
            title="Desenvolvimento de Software"
            description="Desenvolvimento de software personalizado com a tecnologia certa, para atingir suas metas de negócios e encantar seus clientes."
          />
          <ItemList
            href="#"
            icon={GridIcon}
            title="Integrações"
            description="Conecte vários sistemas, fontes de dados e aplicativos sob o mesmo teto digital para atender às crescentes demandas de negócios e gerenciar sua operação sem problemas."
          />
          <ItemList
            href="#"
            icon={RefreshCcwIcon}
            title="Automação"
            description="Criamos plataformas de controle de automação, geramos dados através dos dados coletados e criamos formas inteligentes de gerenciar sua operação, gerando resultados de verdade para sua empresa."
          />
          <ItemList
            href="#"
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
                <svg
                  class="flex-shrink-0 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  />
                </svg>
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
        <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
        <button
          type="button"
          class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-expanded="false"
        >
          <span>Soluções</span>
          <ChevronDownIcon size={"20"} strokeWidth={2} />
        </button>
        <div
          class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 dropdown-content"
        >
          <div
            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <ItemList
              href="#contact-id"
              icon={SmartphoneIcon}
              title="Desenvolvimento de Aplicativos"
              description="Desenvolvimento de aplicativos personalizado com a tecnologia certa, para atingir suas metas de negócios e encantar seus clientes."
            />
            <ItemList
              href="#"
              icon={CodeIcon}
              title="Desenvolvimento de Software"
              description="Desenvolvimento de software personalizado com a tecnologia certa, para atingir suas metas de negócios e encantar seus clientes."
            />
            <ItemList
              href="#"
              icon={GridIcon}
              title="Integrações"
              description="Conecte vários sistemas, fontes de dados e aplicativos sob o mesmo teto digital para atender às crescentes demandas de negócios e gerenciar sua operação sem problemas."
            />
            <ItemList
              href="#"
              icon={RefreshCcwIcon}
              title="Automação"
              description="Criamos plataformas de controle de automação, geramos dados através dos dados coletados e criamos formas inteligentes de gerenciar sua operação, gerando resultados de verdade para sua empresa."
            />
            <ItemList
              href="#"
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
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                    />
                  </svg>
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
    <a href="http://#" class="btn">Entrar em contato</a>
  </div>
</div>
