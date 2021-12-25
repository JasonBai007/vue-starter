import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// 可以在meta中：
// 添加 auth 来控制是否校验权限
// 添加 keepAlive 来控制是否需要缓存
const router = new Router({
  routes: [
    // 首先是登录页的路由    
    {
      path: "/login",
      name: "login",
      meta: {
        title: "Vue Starter",
      },
      component: () => import("@/views/login"),
    },
    {
      path: "/register",
      name: "register",
      meta: {
        title: "Vue Starter",
      },
      component: () => import("@/views/register"),
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      meta: {
        title: "Vue Starter",
      },
      component: () => import("@/views/forgot-password"),
    },
    {
      path: "/",
      name: "home",
      meta: {
        title: "首页",
      },
      redirect: "/dashboard",
      component: () => import("@/layout"),
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          meta: {
            title: "Dashboard",
          },
          component: () => import("@/views/dashboard"),
        },
        {
          path: "account",
          name: "account",
          meta: {
            title: "人员管理",
          },
          component: () => import("@/views/account"),
        },
        {
          path: "infinite",
          name: "infinite",
          meta: {
            title: "无限滚动",
          },
          component: () => import("@/views/infinite"),
        },
        {
          path: "weather",
          name: "weather",
          meta: {
            title: "气象信息",
          },
          component: () => import("@/views/weather"),
        },
        {
          path: "others",
          name: "others",
          meta: {
            title: "其它页面",
          },
          component: () => import("@/layout/nested"),
          children: [
            {
              path: "pannel",
              name: "pannel",
              meta: {
                title: "灵魂面板",
              },
              component: () => import("@/views/pannel"),
            },
            {
              path: "formpage",
              name: "formpage",
              meta: {
                title: "动态表单",
              },
              component: () => import("@/views/formpage"),
            },
            {
              path: "offset",
              name: "offset",
              meta: {
                title: "偏移量",
              },
              component: () => import("@/views/offset"),
            },
            {
              path: "videos",
              name: "videos",
              meta: {
                title: "录像与直播",
              },
              component: () => import("@/views/videos"),
            },
            {
              path: "blank",
              name: "blank",
              meta: {
                title: "空白页面",
              },
              component: () => import("@/views/blank"),
            },
            {
              path: "coming",
              name: "coming",
              meta: {
                title: "敬请期待",
              },
              component: () => import("@/views/coming"),
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
      component: () => import("@/views/401"),
    },
    {
      path: "*",
      meta: {
        title: "404",
      },
      component: () => import("@/views/404"),
    },
  ],
});

// 当一个导航触发时，全局的 before 钩子按照创建顺序调用。钩子是异步解析执行，此时导航在所有钩子 resolve 完之前一直处于等待中。
router.beforeEach((to, from, next) => {
  // 自动化修改页面标签的 title
  document.title = to.meta.title;
  next();
  // 如果已经登录，并且要去登录页，就不让TA去登录页，重定向到首页
  // if (to.path === "/login" && localStorage.token) {
  //   next("/dashboard");
  // } else {
  //   next();
  // }
});

export default router;
