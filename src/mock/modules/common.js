import Mock from "mockjs";
let debug = 1;
if (debug) {
  // 登录接口
  Mock.mock(/login/, {
    code: 0,
    msg: "Success",
    data: {
      userId: "@integer(1,10)",
      "userName|1": ["Admin","Operators"],
      token: "@string(30)"
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
