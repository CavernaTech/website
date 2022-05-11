<script>
    import {
        Tabs,
        TabList,
        TabPanel,
        Tab,
    } from "../../components/Tabs/tabs.js";

    import {
        CodeIcon,
        SmartphoneIcon,
        GitMergeIcon,
        RefreshCcwIcon,
        GridIcon,
    } from "svelte-feather-icons";
    import AndroidContent from "./DesenvolvimentoAplicativos/AndroidContent.component.svelte";
    import DesenvolvimentoSoftwareContent from "./DesenvolvimentoSoftware/DesenvolvimentoSoftwareContent.component.svelte";
    import Integracoes from "./Integracoes/Integracoes.component.svelte";
</script>

<section class="flex flex-row min-h-screen justify-center bg-white">
    <div class="flex flex-col min-w-full items-center">
        <div class="p-5">
            <p class="font-light text-4xl text-center">
                Confira nossas soluções
            </p>
            <p class="font-bold text-4xl text-center">
                teremos prazer em atende-los
            </p>
            <div class="container mt-5 text-xl text-center">
                Conecte sistemas, softwares e aplicativos, gerencie APIs e
                automatize dados e processos da sua empresa em uma única plataforma.
                <br />
                Garanta escalabilidade, segurança e agilidade para as suas integrações
                complexas.
            </div>
        </div>
        <Tabs>
            <div class="flex flex-row container justify-center">
                <TabList>
                    <Tab icon={SmartphoneIcon}
                        >Desenvolvimento de Aplicativos</Tab
                    >
                    <Tab icon={CodeIcon}>Desenvolvimento de Software</Tab>
                    <Tab icon={GridIcon}>Integrações</Tab>
                    <Tab icon={RefreshCcwIcon}>Automação</Tab>
                    <Tab icon={GitMergeIcon}>Outsourcing IT</Tab>
                </TabList>
            </div>
            <div class="flex flex-row container justify-center">
                <TabPanel>
                    <AndroidContent />
                </TabPanel>

                <TabPanel>
                    <DesenvolvimentoSoftwareContent />
                </TabPanel>

                <TabPanel>
                    <Integracoes />
                </TabPanel>

                <TabPanel>
                    <h2>Third aa</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Third bb</h2>
                </TabPanel>
            </div>
        </Tabs>
    </div>
</section>
