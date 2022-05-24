<script>
  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import Index from "./views/index.page.svelte";

  const routes = {
    "/": Index,
    "/mobile": wrap({
      asyncComponent: () => import("./views/Mobile.page.svelte"),
    }),
    "*": Index,
  };
</script>

<Router {routes} />
