<script>
  let openMenu = false;
  var logo = "assets/caverna-tech/logo.svg";

  function setOpenMenu() {
    openMenu = !openMenu;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    logo = "assets/caverna-tech/logo-dark.svg";
  }

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

<div class="relative z-50 bg-white">
  <div class="max-w-full mx-auto px-4 sm:px-6">
    <div
      class="flex justify-between items-center border-b-2 border-gray-   py-6 md:justify-start md:space-x-10"
    >
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <span class="sr-only">Workflow</span>
          <img class="h-8 w-auto sm:h-14" src={logo} alt="" />
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button
          type="button"
          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
          on:click={setOpenMenu}
        >
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/menu -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <nav class="hidden md:flex space-x-10">
        <a
          href="#intro-id"
          class="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          CavernaTech
        </a>
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
        <a
          href="#contact-id"
          class="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Contato
        </a>
      </nav>
    </div>
  </div>

  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  {#if openMenu == true}
    <div
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    >
      <div
        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
      >
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-8 w-auto" src={logo} alt="Workflow" />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                on:click={setOpenMenu}
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <a
                href="#"
                class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
              >
                <!-- Heroicon name: outline/chart-bar -->
                <svg
                  class="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                  Analytics
                </span>
              </a>

              <a
                href="#"
                class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
              >
                <!-- Heroicon name: outline/cursor-click -->
                <svg
                  class="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                  Engagement
                </span>
              </a>

              <a
                href="#"
                class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
              >
                <!-- Heroicon name: outline/shield-check -->
                <svg
                  class="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                  Security
                </span>
              </a>

              <a
                href="#"
                class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
              >
                <!-- Heroicon name: outline/view-grid -->
                <svg
                  class="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                  Integrations
                </span>
              </a>

              <a
                href="#"
                class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
              >
                <!-- Heroicon name: outline/refresh -->
                <svg
                  class="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                  Automations
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
