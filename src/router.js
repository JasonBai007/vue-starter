import Vue from "vue";
import Router from "vue-router";
const Home = () => import("./views/Home.vue");
const About = () => import("./views/About.vue");
const Charts = () => import("./views/Charts.vue");

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "首页"
      },
      component: Home
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "关于我"
      },
      component: About
    },
    {
      path: "/charts",
      name: "charts",
      meta: {
        title: "图表"
      },
      component: Charts
    }
  ]
});

router.beforeEach((to, from, next) => {
  // 自动化修改页面标签的 title
  document.title = to.meta.title;
  // 确保要调用 next 方法，否则钩子就不会被 resolved
  next();
});

export default router;
