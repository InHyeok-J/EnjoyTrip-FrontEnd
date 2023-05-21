import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import MypageView from "../views/MypageView.vue";
import SignUpFormView from "@/views/SignUpFormView.vue";
import SignUpEmailAuthView from "@/views/SignUpEmailAuthView.vue";
import SignUpNicknameView from "@/views/SignUpNicknameView.vue";
import KakaoRedirectView from "@/views/oauthredirect/KakaoRedirectView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/mypage",
    name: "mypage",
    component: MypageView,
  },
  {
    path: "/signup",
    name: "signup form",
    component: SignUpFormView,
  },
  {
    path: "/signup/email",
    name: "signup email",
    component: SignUpEmailAuthView,
  },
  {
    path: "/signup/nickname",
    name: "signup nicknameCheck",
    component: SignUpNicknameView,
  },
  {
    path: "/oauth/kakao/callback",
    name: "kakao oauth redirect",
    component: KakaoRedirectView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
