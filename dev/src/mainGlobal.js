import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseHeader from "@/components/BaseHeader";
import BaseText from "@/components/BaseText";
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import BasePagination from "@/components/BasePagination";
import BaseFooter from "@/components/BaseFooter";

Vue.components("BaseHeader", BaseHeader);
Vue.components("BaseText", BaseText);
Vue.components("BaseButton", BaseButton);
Vue.components("BaseInput", BaseInput);
Vue.components("BasePagination", BasePagination);
Vue.components("BaseFooter", BaseFooter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
