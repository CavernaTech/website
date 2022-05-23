<script>
  import { Router, Route } from "svelte-routing";
  import Index from "./views/index.page.svelte";
  import Mobile from "./views/Mobile.page.svelte";

  export let url = "";
</script>

<Router {url}>
    <Route path="mobile" component={Mobile} />
    <Route path="/"><Index /></Route>
</Router>
