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
        GridIcon,
    } from "svelte-feather-icons";
    import AndroidContent from "./DesenvolvimentoAplicativos/AndroidContent.component.svelte";
    import DesenvolvimentoSoftwareContent from "./DesenvolvimentoSoftware/DesenvolvimentoSoftwareContent.component.svelte";
    import Integracoes from "./Integracoes/Integracoes.component.svelte";
    import Outsourcing from "./Outsourcing /Outsourcing.component.svelte";
</script>

<section class="flex flex-row min-h-screen justify-center bg-white" id="solucoes">
    <div class="flex flex-col min-w-full items-center">
        <div class="p-5">
            <p class="font-light text-4xl text-center">
                Confira nossas soluções
            </p>
            <p class="font-bold text-4xl text-center">
                teremos prazer em atendê-los
            </p>
        </div>
        <Tabs>
            <div class="flex flex-row w-screen justify-center">
                <TabList>
                    <div
                        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-11"
                    >
                        <Tab icon={SmartphoneIcon}>
                            Desenvolvimento de Aplicativos
                        </Tab>
                        <Tab icon={CodeIcon}>Desenvolvimento de Software</Tab>
                        <Tab icon={GridIcon}>Integrações</Tab>
                        <Tab icon={GitMergeIcon}>Outsourcing IT</Tab>
                    </div>
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
                    <Outsourcing />
                </TabPanel>
            </div>
        </Tabs>
    </div>
</section>
