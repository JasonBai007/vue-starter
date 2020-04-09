// 如果需要动态生成路由，那可以参考这个文件
// 解析后台传过来的数组，输出routes配置表数组
export default function generateRoutes(arr) {
  // 准备一个框
  let _arr = [];
  // 遍历原始数组
  arr.forEach(obj => {
    // 如果有二级菜单
    if (obj.children.length !== 0) {
      obj.children.forEach(_obj => {
        // 在子路由中剔除401和404
        if (!["401", "404"].includes(_obj.name)) {
          _arr.push({
            path: _obj.router,
            meta: {
              title: _obj.name,
              bread: obj.name + "&" + _obj.name
            },
            component: () => import(`@/views${_obj.router}`)
          });
        }
      });
    } else {
      // 如果只有一级菜单
      _arr.push({
        path: obj.router,
        meta: {
          title: obj.name,
          bread: obj.name
        },
        component: () => import(`@/views${obj.router}`)
      });
    }
  });
  console.log(_arr);
  // 构建多级路由+404路由配置表
  return [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/layout"),
      children: _arr
    },
    {
      path: "/401",
      meta: {
        title: "401",
        bread: "401"
      },
      component: () => import("@/views/401")
    },
    {
      path: "*",
      meta: {
        title: "404",
        bread: "404"
      },
      component: () => import("@/views/404")
    }
  ];
}
