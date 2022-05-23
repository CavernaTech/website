<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Contact from "../components/Contact.component.svelte";
</script>

<Header />
<main>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="assets/img/metodologia-agil.webp"
        alt="Aplicativos robustos e complexos"
        class="max-w-xl rounded-lg"
      />
      <div>
        <h1 class="text-6xl font-bold">Desenvolvimento mobile</h1>
        <p class="py-6 text-2xl">
          Trabalhamos com metodologia específica para criação de aplicativos
        </p>
      </div>
    </div>
  </div>
  <div
    class="hero min-h-screen bg-gray-400"
    style="background-image: url(assets/img/business_mobile.jpg);"
  >
    <div class="hero-overlay bg-opacity-60" />
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-lg">
        <h1 class="mb-5 text-6xl font-bold">
          Desenvolvimento ágil de aplicativos
        </h1>
        <p class="mb-5 text-2xl">
          Somos mobile expert, e experts em metodologia ágil. Nossos
          desenvolvedores fazem muito mais do que escrever códigos. Geramos
          valor a partir das melhores tecnologias e linguagens.
        </p>
      </div>
    </div>
  </div>
  <div class="hero min-h-screen bg-gray-800 text-gray-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src="assets/img/structure.jpg" alt="" class="max-w-xl rounded-lg" />
      <div>
        <h1 class="text-6xl font-bold">
          Especificação e Arquitetura de aplicativos
        </h1>
        <p class="py-6 text-2xl">
          Nossa preocupação é garantir todo e qualquer processo, de forma
          estruturada, escalavel e flexível. E claro, garantindo boas práticas
          em QA e DevOps, como manutenção e segurança para o projeto do
          aplicativo
        </p>
      </div>
    </div>
  </div>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-lg">
        <h1 class="text-6xl font-bold">
          Mobile UX Design fluida e consistente
        </h1>
        <p class="py-6 text-2xl">
          Soluções reais, coerentes e atraentes de UX e UI, combinadas com boas
          práticas de design para Android ou iOS. Buscamos a melhor experiência
          para o seu cliente.
        </p>
      </div>
    </div>
  </div>
  <div
    class="hero min-h-screen"
    style="background-image: url(assets/img/analytics.jpg);"
  >
    <div class="hero-overlay bg-opacity-60" />
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-lg">
        <h1 class="mb-5 text-6xl font-bold">Gestão próxima e indicadores</h1>
        <p class="mb-5 text-2xl">
          Nossa equipe de desenvolvimento mobile apoia seu projeto de app em
          todas as etapas. Somos treinados a responder de forma ágil e assertiva
          a cada validação do projeto, a fim de cumprir prazos e garantir
          qualidade.
        </p>
      </div>
    </div>
  </div>
  <Contact />
</main>
<Footer />
