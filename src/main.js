import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { default as msalPlugin } from "vue-msal-browser";

const msalConfig = {
  auth: {
    tenant: "bfa885b8-69a2-4f47-898d-72773db7a2cb",
    clientId: "ce2159a2-7166-4290-b783-bbdf49bd2a09",
    authority:
      "https://login.microsoftonline.com/bfa885b8-69a2-4f47-898d-72773db7a2cb",
    redirectUri: "http://localhost:8080", // It has to be configured on your Azure tenant
    scopes: ["User.Read"],
  },
  cache: {
    cacheLocation: "localStorage",
  },
  mode: "redirect",
};

Vue.use(msalPlugin, msalConfig);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
