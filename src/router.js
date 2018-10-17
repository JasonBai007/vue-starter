import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于我'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import ('./views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 自动化修改页面标签的 title
  document.title = to.meta.title
    // 确保要调用 next 方法，否则钩子就不会被 resolved
  next()
})

export default router