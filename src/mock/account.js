import Mock from "mockjs";
let debug = 1;
if (debug) {
  Mock.mock(/getTableData/, {
    code: 0,
    msg: "Success",
    "data|10": [
      {
        id: "@increment",
        name: "@cname",
        hero: "@pick(['甄姬','后裔','蔡文姬'])",
        date: "@date",
        province: "@province",
        address: "@csentence",
        type: "@pick(['法师','射手','辅助'])"
      }
    ]
  });
}
