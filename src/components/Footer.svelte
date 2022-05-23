<script>
  let date = new Date().getFullYear();
  import {
    FacebookIcon,
    InstagramIcon,
    GithubIcon,
  } from "svelte-feather-icons";
</script>

<footer class="relative bg-gray-200 pt-8 pb-6" id="footer">
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
        class="text-gray-200 fill-current"
        points="2560 0 2560 100 0 100"
      />
    </svg>
  </div>
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-center lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl font-semibold">Não deixe de nos seguir!</h4>
        <h5 class="text-lg mt-0 mb-2 text-gray-600">
          Acompanhe-nos em nossas redes e fique por dentro das novidades da
          CavernaTech.
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
          <button
            class="h-10 w-10 items-center justify-center align-center outline-none mr-2"
            type="button"
          >
            <a href="https://www.facebook.com/CavernaTech">
              <FacebookIcon />
            </a>
          </button>
          <button
            class="h-10 w-10 items-center justify-center align-center outline-none mr-2"
            type="button"
          >
            <a href="https://www.instagram.com/cavernatech.dev/">
              <InstagramIcon />
            </a>
          </button>
          <button
            class="h-10 w-10 items-center justify-center align-center outline-none mr-2"
            type="button"
          >
            <a href="https://github.com/CavernaTech/">
              <GithubIcon />
            </a>
          </button>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span
              class="block uppercase text-gray-500 text-sm font-semibold mb-2"
            >
              Links Úteis
            </span>
            <ul class="list-unstyled">
              <li>
                <a
                  class="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                  href="#sobre"
                >
                  Sobre nos
                </a>
              </li>
              <li>
                <a
                  class="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                  href="https://blog.cavernatech.dev"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  class="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                  href="https://github.com/CavernaTech/"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-300" />
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-gray-500 font-semibold py-1">
          Copyright © {date} CavernaTech.
        </div>
      </div>
    </div>
  </div>
</footer>
