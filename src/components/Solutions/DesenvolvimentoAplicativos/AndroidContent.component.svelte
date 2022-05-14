<script>
    import CardSolution from "./CardSolution.component.svelte";
</script>

<section class="mt-10">
    <div class="flex sm:flex-row flex-col justify-evenly">
        <CardSolution
            imgSrc="assets/icons/outline/android.svg"
            altImg="Android"
            firstText="Desenvolvimento de"
            secondText="aplicativos Android"
        />
        <CardSolution
            imgSrc="assets/icons/outline/apple.svg"
            altImg="Apple"
            firstText="Desenvolvimento de"
            secondText="aplicativos iOS"
        />
        <CardSolution
            imgSrc="assets/icons/outline/flutter.svg"
            altImg="Flutter"
            firstText="Desenvolvimento de"
            secondText="aplicativos Flutter"
        />
        <CardSolution
            imgSrc="assets/icons/outline/pwa.svg"
            altImg="PWA"
            firstText="Desenvolvimento de"
            secondText="aplicativos PWA"
        />
    </div>
    <div class="w-screen mt-10 mb-20">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="row-span-3">
                <img src="assets/img/metodologia-agil.webp" alt="" class="w-0 md:w-full" />
            </div>
            <div class="col-span-2">
                <p class="font-light text-4xl">
                    Trabalhamos com metodologia específica
                </p>
                <p class="font-bold text-4xl">para criação de aplicativos</p>
            </div>
            <div class="row-span-2 col-span-2">
                <div class="grid grid-rows-2 grid-flow-col gap-2">
                    <div class="max-w-sm p-2">
                        <p class="font-bold text-lg">
                            Especificação e <br /> Arquitetura de aplicativos
                        </p>
                        <p class="text-sm">
                            Nossa preocupação é garantir todo e qualquer
                            processo, de forma estruturada, escalavel e
                            flexível. E claro, garantindo boas práticas em QA e
                            DevOps, como manutenção e segurança para o projeto
                            do aplicativo.
                        </p>
                    </div>
                    <div class="max-w-sm p-2">
                        <p class="font-bold text-lg">
                            Desenvolvimento ágil <br /> de aplicativos
                        </p>
                        <p class="text-sm">
                            Somos mobile expert, e experts em metodologia ágil.
                            Nossos desenvolvedores fazem muito mais do que
                            escrever códigos. Geramos valor a partir das
                            melhores tecnologias e linguagens.
                        </p>
                    </div>
                    <div class="max-w-sm p-2">
                        <p class="font-bold text-lg">
                            Mobile UX Design fluida <br /> e consistente
                        </p>
                        <p class="text-sm">
                            Soluções reais, coerentes e atraentes de UX e UI,
                            combinadas com boas práticas de design para Android
                            ou iOS. Buscamos a melhor experiência para o seu
                            cliente.
                        </p>
                    </div>
                    <div class="max-w-sm p-2">
                        <p class="font-bold text-lg">
                            Gestão próxima e <br /> indicadores
                        </p>
                        <p class="text-sm">
                            Nossa equipe de desenvolvimento mobile apoia seu
                            projeto de app em todas as etapas. Somos treinados a
                            responder de forma ágil e assertiva a cada validação
                            do projeto, a fim de cumprir prazos e garantir
                            qualidade.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
