<script>
    import HeroLeft from "./HeroLeft.component.svelte";
</script>

<section class="mt-10 lg:max-w-6xl lg:mx-auto">
    <div class="p-5">
        <p class="font-light text-4xl text-center">
            Suprimos as necessidades especificas
        </p>
        <p class="font-bold text-4xl text-center">para suas demandas.</p>
        <div class="container mt-5 text-xl text-center">
            A Alocação ou terceirização de TI, também conhecida como Body Shop e
            Outsourcing, é uma importante iniciativa para
            <span class="font-bold"
                >reduzir gastos e aumentar a capacidade operacional.</span
            >
        </div>
    </div>
    <div class="p-5">
        <div class="container mt-5 text-xl text-center">
            Não fique limitado a tecnologia. Use a flexibilidade da CavernaTech
            e contrate nossos serviços possuímos stack em diferentes
            tecnologias.
        </div>
    </div>
    <div class="p-5">
        <p class="font-bold text-4xl text-center">Como Trabalhamos</p>
    </div>
    <div class="grid md:grid-cols-2 gap-3 mb-20">
        <HeroLeft
            img="assets/img/undraw_conversation.svg"
            seq="1"
            title="Conversa com especialista"
            description="Entendemos quais são os seus objetivos atuais e recomendamos a equipe adequada para sua necessidade."
        />
        <HeroLeft
            img="assets/img/undraw_people_search.svg"
            seq="2"
            title="Formação da sua Squad de alta performance"
            description="Selecionamos os melhores profissionais para compor a sua equipe respeitando as necessidades do seu projeto."
        />
        <HeroLeft
            img="assets/img/undraw_upgrade.svg"
            seq="3"
            title="Início do projeto"
            description="O projeto é iniciado com o planejamento necessário para cumprir seus objetivos. Firmamos acordos de entregas parciais e frequentes para monitorar o progresso do projeto."
        />
        <HeroLeft
            img="assets/img/undraw_success_factors.svg"
            title="Acompanhamento do sucesso & ROI"
            seq="4"
            description="Somos comprometidos com seus resultados.
            O seu Gerente de Sucesso acompanha as entregas de valor e indicadores do projeto para garantir sua satisfação e está disponível para te atender."
        />
    </div>
</section>
