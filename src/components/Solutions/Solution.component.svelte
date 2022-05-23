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

<section class="min-h-screen justify-center bg-white" id="solucoes">
    <div class="p-5">
        <p class="font-light text-4xl text-center">
            Confira nossas soluções
        </p>
        <p class="font-bold text-4xl text-center">
            teremos prazer em atendê-los
        </p>
    </div>
    <Tabs>
        <TabList>
            <Tab icon={SmartphoneIcon}>
                Desenvolvimento de Aplicativos
            </Tab>
            <Tab icon={CodeIcon}>Desenvolvimento de Software</Tab>
            <Tab icon={GridIcon}>Integrações</Tab>
            <Tab icon={GitMergeIcon}>Outsourcing IT</Tab>
        </TabList>
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
    </Tabs>
</section>
