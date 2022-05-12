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
                teremos prazer em atendê-los
            </p>
        </div>
        <div class="max-w-full">
            <Tabs>
                <div class="flex flex-row justify-center">
                    <TabList>
                        <div
                            class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-11"
                        >
                            <Tab icon={SmartphoneIcon}>
                                Desenvolvimento de Aplicativos
                            </Tab>
                            <Tab icon={CodeIcon}
                                >Desenvolvimento de Software</Tab
                            >
                            <Tab icon={GridIcon}>Integrações</Tab>
                            <Tab icon={RefreshCcwIcon}>Automação</Tab>
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
                        <h2>Third aa</h2>
                    </TabPanel>

                    <TabPanel>
                        <h2>Third bb</h2>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    </div>
</section>
