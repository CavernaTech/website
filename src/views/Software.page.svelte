<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Contact from "../components/Contact.component.svelte";
</script>

<Header />
<main>
  <div
    class="hero min-h-screen bg-gray-400"
    style="background-image: url(assets/img/industry.jpg);"
  >
    <div class="hero-overlay bg-opacity-60" />
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-lg">
        <h1 class="mb-5 text-6xl font-bold">
          Software house com melhor em tecnologia de ponta a ponta!
        </h1>
        <p class="mb-5 text-2xl">
          A CavernaTech é uma software house especialista em desenvolver
          sistemas e aplicativos sob medida. Com atuação flexível, avaliamos
          seus objetivos de negócio para propor soluções de tecnologia bem
          fundamentados
        </p>
      </div>
    </div>
  </div>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="assets/img/factory.jpg"
        alt="Fábrica pronta para produção"
        class="min-w-xs lg:max-w-lg rounded-lg"
      />
      <div>
        <h1 class="text-6xl font-bold">Início rápido e entregas frequentes</h1>
        <p class="py-6 text-2xl">
          Agilidade é parte da cultura CavernaTech. Com alocação rápida de
          profissionais, iniciamos projetos na velocidade que sua empresa
          precisa e entregamos valor agregado continuamente.
        </p>
      </div>
    </div>
  </div>
  <div class="hero min-h-screen bg-gray-800 text-gray-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        src="assets/img/structure.jpg"
        alt="Pessoas planejando projeto"
        class="min-w-xs lg:max-w-lg rounded-lg"
      />
      <div>
        <h1 class="text-6xl font-bold">Redução de custo & Time-to-market</h1>
        <p class="py-6 text-2xl">
          NElimine seu esforço de contratação e comece a desenvolver o seu
          projeto imediatamente. Montar times internos consome muito tempo. Com
          uma equipe CavernaTech você lança seus projetos de tecnologia mais
          rápido com qualidade garantida.
        </p>
      </div>
    </div>
  </div>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-lg">
        <h1 class="text-6xl font-bold">Excelência em engenharia de software</h1>
        <p class="py-6 text-2xl">
          Mais de 10 anos de experiência em desenvolvimento de software,
          sistemas de missão crítica e alta disponibilidade. Vasto conhecimento
          em: Microservices, Serverless, Codeless, IaaS, TDD, BDD, Integration
          Patterns, Arquitetura Evolutiva, Engenharia de Dados, Design System e
          outras práticas.
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
        <h1 class="mb-5 text-6xl font-bold">
          Qualidade, segurança e boas práticas
        </h1>
        <p class="mb-5 text-2xl">
          Testes automáticos, unitários e manuais atendem as metas de qualidade.
          Eficiência de ponta a ponta com Ciclo de Vida Seguro de
          Desenvolvimento de Software e certificação PCI/DSS.
        </p>
      </div>
    </div>
  </div>
  <div class="hero min-h-screen bg-gray-800 text-gray-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        src="assets/img/teamwork.jpg"
        alt="Pessoas comprometidas"
        class="min-w-xs lg:max-w-lg rounded-lg"
      />
      <div>
        <h1 class="text-6xl font-bold">Gestão eficiente e inovadora</h1>
        <p class="py-6 text-2xl">
          Gestão proativa nas necessidades de cada cliente com KPIs que
          monitoram as entregas. Se você precisa, a CavernaTech se adapta.
          Olhamos pra cada indivíduo, mantendo o fit cultural, monitorando
          engajamento e indicadores de performance.
        </p>
      </div>
    </div>
  </div>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-lg">
        <h1 class="text-6xl font-bold">Retorno sobre investimento (ROI)</h1>
        <p class="py-6 text-2xl">
          Velocidade para começar, zero burocracia, alto conhecimento em
          engenharia de software e redução dos seus custos internos tornam as
          equipes da CavernaTech a melhor opção para aumentar seu retorno sobre
          investimento (ROI).
        </p>
      </div>
    </div>
  </div>
  <div
    class="hero min-h-screen"
    style="background-image: url(assets/img/conference.jpg);"
  >
    <div class="hero-overlay bg-opacity-60" />
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-lg">
        <h1 class="mb-5 text-6xl font-bold">
          Responsabilidade com o resultado
        </h1>
        <p class="mb-5 text-2xl">
          Ninguém conhece o seu negócio mais do que você. Juntos defineremos
          metas e critérios de sucesso mensuráveis. Os projetos serão executados
          visando atender a estes critérios.
        </p>
      </div>
    </div>
  </div>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="assets/img/startup.jpg"
        alt="Equipe responsável"
        class="min-w-xs lg:max-w-lg rounded-lg"
      />
      <div>
        <h1 class="text-6xl font-bold">Melhores talentos do mercado</h1>
        <p class="py-6 text-2xl">
          Nossos crivos de seleção garantem profissionais experientes, com uma
          cultura que valoriza excelência em engenharia de software e boas
          práticas.
        </p>
      </div>
    </div>
  </div>
  <Contact />
</main>
<Footer />
