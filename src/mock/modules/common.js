import Mock from "mockjs";
let debug = 1;
if (debug) {
  // 登录接口
  Mock.mock(/login/, {
    code: 0,
    msg: "Success",
    data: {
      userId: "@integer(1,10)",
      "userName|1": ["白总"],
      token: "@string(30)"
    }
  });

  // 获取权限元数组
  Mock.mock(/getMenu/, {
    code: 0,
    msg: "Success",
    data: {
      menu: [
        {
          name: "Dashboard",
          name_en: "Dashboard",
          router: "/dashboard",
          icon: "el-icon-menu",
          children: []
        },
        {
          name: "人员管理",
          name_en: "Account",
          router: "/account",
          icon: "el-icon-s-tools",
          children: []
        },
        {
          name: "气象信息",
          name_en: "Weather",
          router: "/weather",
          icon: "el-icon-picture",
          children: []
        },        
        {
          name: "乱七八糟",
          name_en: "Others",
          router: "/others",
          icon: "el-icon-s-data",
          children: [
            {
              name: "空白页面",
              name_en: "Blank",
              router: "/blank",
              icon: ""
            },
            {
              name: "401",
              name_en: "401",
              router: "/401",
              icon: ""
            },
            {
              name: "404",
              name_en: "404",
              router: "/404",
              icon: ""
            }
          ]
        }
      ]
    }
  });

  // 促销大区列表
  Mock.mock(/campaign/, {
    code: 0,
    msg: "success",
    data: [
      {
        id: 1,
        name: "大中华区促销活动"
      },
      {
        id: 2,
        name: "北美促销活动"
      },
      {
        id: 3,
        name: "东南亚促销活动"
      }
    ]
  });
}
