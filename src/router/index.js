import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import MypageHomeView from "../views/MypageHomeView.vue";
import MypageUserManageView from "@/views/MypageUserManageView.vue";
import SignUpFormView from "@/views/SignUpFormView.vue";
import SignUpEmailAuthView from "@/views/SignUpEmailAuthView.vue";
import SignUpNicknameView from "@/views/SignUpNicknameView.vue";
import CourseAllView from "@/views/CourseAllView.vue";
import CourseDetailView from "@/views/CourseDetailView.vue";
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
    component: MypageHomeView,
  },
  {
    path: "/mypage/manage",
    name: "mypage user manage",
    component: MypageUserManageView,
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
  {
    path: "/courses",
    name: "courses all",
    component: CourseAllView,
  },
  {
    path: "/courses/:id",
    name: "courses detail",
    component: CourseDetailView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
