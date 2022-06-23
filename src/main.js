import Vue from "vue";
import App from "@/App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import "@/assets/iconfont/iconfont.css";
import "@/mock";
import filters from "@/filter";
import "animate.css";
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
Vue.config.productionTip = false;
Vue.use(Vant);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
