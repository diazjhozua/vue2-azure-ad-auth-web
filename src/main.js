import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { default as msalPlugin } from "vue-msal-browser";

const msalConfig = {
  auth: {
    tenant: process.env.VUE_APP_MSAL_TENANT_ID,
    clientId: process.env.VUE_APP_MSAL_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.VUE_APP_MSAL_TENANT_ID}`,
    redirectUri: process.env.VUE_APP_MSAL_REDIRECT_URI,
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
