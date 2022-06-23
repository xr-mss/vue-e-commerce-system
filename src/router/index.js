import Vue from "vue";
import VueRouter from "vue-router";
import Cart from "@/views/Cart.vue";
import Category from "@/views/Category.vue";
import Home from "@/views/Home.vue";
import User from "@/views/User.vue";
import Search from "@/views/search.vue";
import Login from "@/views/Login.vue";
import { getToken } from "@/utils/token.js";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  {
    name: "home",
    path: "/home",
    component: Home,
    meta: {
      showTab: true,
    },
  },
  {
    name: "category",
    path: "/category",
    component: Category,
    meta: {
      showTab: true,
    },
  },
  {
    name: "cart",
    path: "/cart",
    component: Cart,
    meta: {
      showTab: true,
      login: true,
    },
  },
  {
    name: "user",
    path: "/user",
    component: User,
    meta: {
      showTab: true,
      login: true,
    },
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "search",
    path: "/search",
    component: Search,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  let token = getToken();
  if (!token) {
    if (to.meta.login) {
      next({ name: "login", query: { redirect: to.path } });
    }
  }
  next();
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch((err) => err);
};
export default router;
