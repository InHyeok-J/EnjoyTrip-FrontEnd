import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import MypageHomeView from "../views/mypages/MypageHomeView.vue";
import MypageUserManageView from "@/views/mypages/MypageUserManageView.vue";
import SignUpFormView from "@/views/SignUpFormView.vue";
import SignUpEmailAuthView from "@/views/SignUpEmailAuthView.vue";
import SignUpNicknameView from "@/views/SignUpNicknameView.vue";
import CourseAllView from "@/views/courses/CourseAllView.vue";
import CourseDetailView from "@/views/courses/CourseDetailView.vue";
import CorseRegisterView from "@/views/courses/CourseRegisterView.vue";
import KakaoRedirectView from "@/views/oauthredirect/KakaoRedirectView.vue";
import AttractionSearchView from "../views/attractions/AttractionSearchView.vue";
import AttractionSearchResultView from "../views/attractions/AttractionSearchResultView.vue";
import AttractionDetailView from "@/views/attractions/AttractionDetailView.vue";
import ReviewPostView from "@/views/attractions/ReviewPostView.vue";
import AttractionSearchForCourseView from "../views/attractionsForCourse/AttractionSearchForCourseView.vue";
import AttractionSearchResultForCourseView from "../views/attractionsForCourse/AttractionSearchResultForCourseView.vue";
import AttractionDetailForCourseView from "@/views/attractionsForCourse/AttractionDetailForCourseView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/attraction",
    name: "attraction",
    component: AttractionSearchView,
  },
  {
    path: "/attraction-result",
    name: "attraction-result",
    component: AttractionSearchResultView,
  },
  {
    path: "/attraction-detail/:id",
    name: "attraction-detail",
    component: AttractionDetailView,
  },
  {
    path: "/attractionforcourse",
    name: "attractionforcourse",
    component: AttractionSearchForCourseView,
  },
  {
    path: "/attractionforcourse-result",
    name: "attractionforcourse-result",
    component: AttractionSearchResultForCourseView,
  },
  {
    path: "/attractionforcourse-detail/:id",
    name: "attractionforcourse-detail",
    component: AttractionDetailForCourseView,
  },
  {
    path: "/review/:id",
    name: "review-post",
    component: ReviewPostView,
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
  {
    path: "/courses/regist/form",
    name: "course regist",
    component: CorseRegisterView,
  },
];

const router = new VueRouter({
  mode: "history",

  base: process.env.BASE_URL,
  routes,
});

export default router;
