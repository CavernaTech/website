<script>
  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import Index from "./views/index.page.svelte";

  const routes = {
    "/": Index,
    "/mobile": wrap({
      asyncComponent: () => import("./views/Mobile.page.svelte"),
    }),
    "/software": wrap({
      asyncComponent: () => import("./views/Software.page.svelte"),
    }),
    "*": Index,
  };
</script>

<Router {routes} />
