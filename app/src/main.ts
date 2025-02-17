import App from "./App.vue";
import { createApp } from "vue";
import { createRouter } from "./router";
import { createAuth0 } from "@auth0/auth0-vue";
import hljs from "vue3-highlightjs";
import "highlight.js/styles/github.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

library.add(faLink, faUser, faPowerOff);

app
  .use(hljs)
  .use(createRouter(app))
  .use(
    createAuth0({
      domain: process.env.VUE_APP_DOMAIN,
      client_id: process.env.VUE_APP_CLIENT_ID,
      redirect_uri: window.location.origin,
    })
  )
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
