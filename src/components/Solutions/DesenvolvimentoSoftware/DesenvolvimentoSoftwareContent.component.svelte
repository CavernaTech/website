<script>
    import CardDev from "./CardDev.component.svelte";

    import {
        CodeIcon,
        MonitorIcon,
        SmartphoneIcon,
        CloudIcon,
    } from "svelte-feather-icons";
    import CardDesc from "./CardDesc.component.svelte";
</script>

<section class="mt-10">
    <div class="flex flex-row divide-x-8">
        <div class="p-5">
            <p class="font-light text-4xl">Software house com</p>
            <p class="font-bold text-4xl">
                melhor em tecnologia de ponta a ponta!
            </p>
            <div class="container mt-5 text-xl">
                A CavernaTech é uma software house especialista em <br />
                <span class="font-bold">
                    desenvolver sistemas e aplicativos sob medida.
                </span><br />
                Com atuação flexível, avaliamos seus objetivos de negócio <br />
                para propor soluções de tecnologia bem fundamentados.
            </div>
        </div>
        <div class="p-5">
            <p class="font-light text-4xl">Temos o que sua empresa precisa,</p>
            <p class="font-bold text-4xl">em diversas tecnologias para:</p>
            <div class="grid grid-cols-2 gap-4">
                <CardDev
                    icon={CodeIcon}
                    firstText="Desenvolvimento"
                    secondText="Back-end"
                />
                <CardDev
                    icon={MonitorIcon}
                    firstText="Desenvolvimento"
                    secondText="Front-end"
                />
                <CardDev
                    icon={SmartphoneIcon}
                    firstText="Desenvolvimento"
                    secondText="Mobile Nativo e Híbrido"
                />
                <CardDev
                    icon={CloudIcon}
                    firstText="Cloud &"
                    secondText="DevSecOps"
                />
            </div>
        </div>
    </div>
    <div>
        <div class="p-5">
            <p class="font-bold text-4xl text-center">
                Vantagens de contratar a CavernaTech
            </p>
            <p class="font-light text-4xl text-center">
                para desenvolvimento de software
            </p>
        </div>
        <div class="grid grid-cols-3 gap-3 mb-10">
            <CardDesc
                title="Início rápido e
            entregas frequentes"
                description="Agilidade é parte da cultura CavernaTech. Com alocação rápida de profissionais, iniciamos projetos na velocidade que sua empresa precisa e entregamos valor agregado continuamente."
            />
            <CardDesc
                title="Excelência em
            engenharia de software"
                description="Mais de 10 anos de experiência em desenvolvimento de software, sistemas de missão crítica e alta disponibilidade. Vasto conhecimento em: Microservices, Serverless, Codeless, IaaS, TDD, BDD, Integration Patterns, Arquitetura Evolutiva, Engenharia de Dados, Design System e outras práticas."
            />
            <CardDesc
                title="Redução de custo & Time-to-market"
                description="Elimine seu esforço de contratação e comece a desenvolver o seu projeto imediatamente. Montar times internos consome muito tempo. Com uma equipe CavernaTech você lança seus projetos de tecnologia mais rápido com qualidade garantida."
            />
            <CardDesc
                title="Qualidade, segurança e boas práticas"
                description="Testes automáticos, unitários e manuais atendem as metas de qualidade. Eficiência de ponta a ponta com Ciclo de Vida Seguro de Desenvolvimento de Software e certificação PCI/DSS."
            />
            <CardDesc
                title="Gestão eficiente e inovadora"
                description="Gestão proativa nas necessidades de cada cliente com KPIs que monitoram as entregas. Se você precisa, a CavernaTech se adapta. Olhamos pra cada indivíduo, mantendo o fit cultural, monitorando engajamento e indicadores de performance."
            />
            <CardDesc
                title="Retorno sobre investimento (ROI)"
                description="Velocidade para começar, zero burocracia, alto conhecimento em engenharia de software e redução dos seus custos internos tornam as equipes da CavernaTech a melhor opção para aumentar seu retorno sobre investimento (ROI)."
            />
            <CardDesc
                title="Responsabilidade com o resultado"
                description="Ninguém conhece o seu negócio mais do que você. Juntos defineremos metas e critérios de sucesso mensuráveis. Os projetos serão executados visando atender a estes critérios."
            />
            <CardDesc
                title="Melhores talentos do mercado"
                description="Nossos crivos de seleção garantem profissionais experientes, com uma cultura que valoriza excelência em engenharia de software e boas práticas."
            />
        </div>
    </div>
</section>
