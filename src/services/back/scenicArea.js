import _ from "lodash";
import request from "../../utils/request";
import { API_BASEURL } from "../../consts/env";

/**
 * 获取个人的所有成绩
 * @returns 文字介绍
 */
async function getScenicAreaList(param) {
  const res = await new Promise((resolve) => {
    let res = {
      data: {
        records: [
          {
            name: "故宫",
            img: require("@/assets/01gg.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "圆明园",
            img: require("@/assets/02ymy.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "颐和园",
            img: require("@/assets/03yhy.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "八达岭",
            img: require("@/assets/04bdl.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "潭柘寺",
            img: require("@/assets/05tzs.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "天坛",
            img: require("@/assets/06tt.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "卢沟桥",
            img: require("@/assets/07lgq.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "天安门",
            img: require("@/assets/08tam.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "嘉峪关",
            img: require("@/assets/09jyg.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "晋祠",
            img: require("@/assets/10jc.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "拙政园",
            img: require("@/assets/11zzy.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "孔庙",
            img: require("@/assets/12km.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "黄山",
            img: require("@/assets/13hs.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "张掖七彩丹霞",
            img: require("@/assets/14zyqcdx.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "泰姬陵",
            img: require("@/assets/15tjl.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "金字塔",
            img: require("@/assets/16jzt.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "香港",
            img: require("@/assets/17xg.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "巴黎",
            img: require("@/assets/18bl.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "巴塞罗那",
            img: require("@/assets/19bsln.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "莫斯科",
            img: require("@/assets/20msk.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
        ],
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

export { getScenicAreaList, getDetailedGrade };
