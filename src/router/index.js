import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// 登录
const signin = () => import("@/views/signin");
// 非登录页的包裹组件
const layout = () => import("@/layout");
// 嵌套的更深层级的包裹组件
const nested = () => import("@/layout/nested");
// 首页
const dashboard = () => import("@/views/dashboard");
// 人员管理
const account = () => import("@/views/account");
// 气象信息
const weather = () => import("@/views/weather");
// 空白页面
const blank = () => import("@/views/blank");
// 401
const unauthorized = () => import("@/views/401");
// 404
const notfound = () => import("@/views/404");

// 可以在meta中：
// 添加 auth 来控制是否校验权限
// 添加 keepAlive 来控制是否需要缓存
const router = new Router({
  routes: [
    // 首先是登录页的路由
    {
      path: "/signin",
      name: "signin",
      meta: {
        title: "Vue Starter",
      },
      component: signin,
    },
    {
      path: "/",
      name: "home",
      meta: {
        title: "首页",
      },
      redirect: "/dashboard",
      component: layout,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          meta: {
            title: "Dashboard",
          },
          component: dashboard,
        },
        {
          path: "account",
          name: "account",
          meta: {
            title: "人员管理",
          },
          component: account,
        },
        {
          path: "weather",
          name: "weather",
          meta: {
            title: "气象信息",
          },
          component: weather,
        },
        {
          path: "others",
          name: "others",
          meta: {
            title: "其它页面",
          },
          component: nested,
          children: [
            {
              path: "blank",
              name: "blank",
              meta: {
                title: "空白页面",
              },
              component: blank,
            },
          ],
        },
      ],
    },
    {
      path: "/401",
      name: "401",
      meta: {
        title: "Unauthorized",
      },
      component: unauthorized,
    },
    {
      path: "*",
      meta: {
        title: "404",
      },
      component: notfound,
    },
  ],
});

// 当一个导航触发时，全局的 before 钩子按照创建顺序调用。钩子是异步解析执行，此时导航在所有钩子 resolve 完之前一直处于等待中。
router.beforeEach((to, from, next) => {
  // 自动化修改页面标签的 title
  document.title = to.meta.title;
  next();
  // 如果已经登录，并且要去登录页，就不让TA去登录页，重定向到首页
  // if (to.path === "/signin" && localStorage.token) {
  //   next("/dashboard");
  // } else {
  //   next();
  // }
});

export default router;
