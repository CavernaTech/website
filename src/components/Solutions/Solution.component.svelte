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
</script>

<section class="flex flex-row min-h-screen justify-center bg-white">
    <div class="flex flex-col min-w-full items-center">
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
                    <h2>Third panel</h2>
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
