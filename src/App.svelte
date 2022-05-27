<script>
  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import Index from "./views/index.page.svelte";
  import TermsController from "./controllers/terms.controller";
  import Terms from "./components/Terms.component.svelte";
  
  let agreed = TermsController.isAgreed();
  let whenAgreed = TermsController.whenAgreed();
  const handleAgreement = TermsController.agreeTerms;
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
    (function (i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function () {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://www.google-analytics.com/analytics.js",
      "ga"
    );
    if (agreed) {
      ga("create", "G-3DNY4MVGWD", "auto");
      ga("send", "pageview");
    }
</script>

<div>
  <Terms bind:agreed onAgreement={handleAgreement} bind:whenAgreed banner />
  <Router {routes} />
</div>