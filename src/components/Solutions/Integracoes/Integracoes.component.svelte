<script>
    import CardSolution from "../DesenvolvimentoAplicativos/CardSolution.component.svelte";

    import {
        ShoppingBagIcon,
        BookIcon,
        ShoppingCartIcon,
        DollarSignIcon,
        TruckIcon,
        HomeIcon,
        PackageIcon,
        SunIcon,
    } from "svelte-feather-icons";
</script>

<section class="mt-10">
    <div class="p-5">
        <p class="font-light text-4xl text-center">
            Construimos a plataforma ideal para
        </p>
        <p class="font-bold text-4xl text-center">
            resolver integrações e APIs complexas
        </p>
        <div class="container mt-5 text-xl text-center">
            Conecte sistemas, softwares e aplicativos, gerencie APIs e
            automatize dados e processos da sua empresa em uma única plataforma.
            <br />
            Garanta escalabilidade, segurança e agilidade para as suas integrações
            complexas.
        </div>
    </div>
    <div class="flex md:w-screen md:flex-row sm:flex-col justify-evenly">
        <CardSolution
            imgSrc={ShoppingBagIcon}
            altImg="Varejo"
            firstText="Integração para"
            secondText="varejo"
        />
        <CardSolution
            imgSrc={BookIcon}
            altImg="Educação"
            firstText="Integração para"
            secondText="educação"
        />
        <CardSolution
            imgSrc={ShoppingCartIcon}
            altImg="E-commerce"
            firstText="Integração para"
            secondText="e-commerce"
        />
        <CardSolution
            imgSrc={DollarSignIcon}
            altImg="Finanças"
            firstText="Integração para"
            secondText="finanças"
        />
        <CardSolution
            imgSrc={TruckIcon}
            altImg="Logística"
            firstText="Integração para"
            secondText="logística"
        />
        <CardSolution
            imgSrc={HomeIcon}
            altImg="Indústria"
            firstText="Integração para"
            secondText="indústria"
        />
        <CardSolution
            imgSrc={PackageIcon}
            altImg="Marketplace"
            firstText="Integração para"
            secondText="marketplace"
        />
        <CardSolution
        imgSrc={SunIcon}
        altImg="Agronegócio"
        firstText="Integração para"
        secondText="agronegócio"
    />
    </div>
    <div class="p-5 mb-20">
        <div class="container mt-5 text-xl text-center">
            Sua aplicação precisa estar conectada com o mundo. Disponibilize
            para seus clientes e parceiros pontos de integração e não perca boas
            oportunidades de negócio. Estamos preparados para seguir as melhores
            práticas de segurança, autenticação, autorização e versionamento das
            interfaces de integração (APIs).
        </div>
    </div>
</section>
