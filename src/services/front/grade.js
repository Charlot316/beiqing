import _ from "lodash";
import request from "../../utils/request";
import { API_BASEURL } from "../../consts/env";

/**
 * 获取个人的所有成绩
 * @returns 文字介绍
 */
async function getOverallGrade(param) {
  const res = await new Promise((resolve) => {
    let res = {
      data: {
        name: "李彩",
        records: [
          {
            name: "故宫",
            grade: 76,
            id: 1,
          },
          {
            name: "圆明园",
            grade: 77,
            id: 2,
          },
          {
            name: "颐和园",
            grade: 86,
            id: 3,
          },
          {
            name: "八达岭",
            grade: 74,
            id: 4,
          },
          {
            name: "潭柘寺",
            grade: 80,
            id: 5,
          },
          {
            name: "天坛",
            grade: 93,
            id: 6,
          },
          {
            name: "卢沟桥",
            grade: 64,
            id: 7,
          },
          {
            name: "天安门",
            grade: 79,
            id: 8,
          },
          {
            name: "嘉峪关",
            grade: 63,
            id: 9,
          },
          {
            name: "晋祠",
            grade: 70,
            id: 10,
          },
          {
            name: "拙政园",
            grade: 87,
            id: 11,
          },
          {
            name: "孔庙",
            grade: 88,
            id: 12,
          },
          {
            name: "黄山",
            grade: 93,
            id: 13,
          },
          {
            name: "张掖七彩丹霞",
            grade: 96,
            id: 14,
          },
          {
            name: "泰姬陵",
            grade: 77,
            id: 15,
          },
          {
            name: "金字塔",
            grade: 79,
            id: 16,
          },
          {
            name: "香港",
            grade: 95,
            id: 17,
          },
          {
            name: "巴黎",
            grade: 78,
            id: 18,
          },
          {
            name: "巴塞罗那",
            grade: 87,
            id: 19,
          },
          {
            name: "莫斯科",
            grade: 80,
            id: 20,
          },
        ],
        grade: 80,
      },
    };

    resolve(res);
  });
  return res;
}

/**
 * 获取个人的所有成绩
 * @returns 文字介绍
 */
async function getDetailedGrade(param) {
  const res = await new Promise((resolve) => {
    let res = {
      data: {
        records: [
          {
            name: "太和门",
            grade: 76,
            id: 1,
          },
          {
            name: "太和殿",
            grade: 77,
            id: 2,
          },
          {
            name: "中和殿",
            grade: 86,
            id: 3,
          },
          {
            name: "保和殿",
            grade: 74,
            id: 4,
          },
          {
            name: "乾清宫",
            grade: 80,
            id: 5,
          },
        ],
      },
    };

    resolve(res);
  });
  return res;
}

export { getOverallGrade, getDetailedGrade };
