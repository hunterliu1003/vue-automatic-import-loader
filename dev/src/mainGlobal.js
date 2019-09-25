import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseHeader from "@/components/BaseHeader";
import BaseText from "@/components/BaseText";
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import BasePagination from "@/components/BasePagination";
import BaseTabs from "@/components/BaseTabs";
import BaseFooter from "@/components/BaseFooter";

Vue.component("BaseHeader", BaseHeader);
Vue.component("BaseText", BaseText);
Vue.component("BaseButton", BaseButton);
Vue.component("BaseInput", BaseInput);
Vue.component("BasePagination", BasePagination);
Vue.component("BaseTabs", BaseTabs);
Vue.component("BaseFooter", BaseFooter);

/* 
  無法確定 App 中一定有用到這些全域元件
  造成不必要的引入
*/

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
