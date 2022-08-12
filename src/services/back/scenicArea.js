import _ from "lodash";
import request from "../../utils/request";
import { API_BASEURL } from "../../consts/env";

/**
 * 获取景区list
 * @returns 景区list
 */
async function getScenicAreaList(param) {
  const res = await new Promise((resolve) => {
    let res = {
      data: {
        records: [
          {
            name: "故宫",
            id: 1,
            img: require("@/assets/01gg.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "圆明园",
            id: 2,
            img: require("@/assets/02ymy.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "颐和园",
            id: 3,
            img: require("@/assets/03yhy.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "八达岭",
            id: 4,
            img: require("@/assets/04bdl.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "潭柘寺",
            id: 5,
            img: require("@/assets/05tzs.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "天坛",
            id: 6,
            img: require("@/assets/06tt.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "卢沟桥",
            id: 7,
            img: require("@/assets/07lgq.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "天安门",
            id: 8,
            img: require("@/assets/08tam.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "嘉峪关",
            id: 9,
            img: require("@/assets/09jyg.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "晋祠",
            id: 10,
            img: require("@/assets/10jc.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "拙政园",
            id: 11,
            img: require("@/assets/11zzy.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "孔庙",
            id: 12,
            img: require("@/assets/12km.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "黄山",
            id: 13,
            img: require("@/assets/13hs.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "张掖七彩丹霞",
            id: 14,
            img: require("@/assets/14zyqcdx.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "泰姬陵",
            id: 15,
            img: require("@/assets/15tjl.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "金字塔",
            id: 16,
            img: require("@/assets/16jzt.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "香港",
            id: 17,
            img: require("@/assets/17xg.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "巴黎",
            id: 18,
            img: require("@/assets/18bl.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "巴塞罗那",
            id: 19,
            img: require("@/assets/19bsln.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicSpotCount: 5,
          },
          {
            name: "莫斯科",
            id: 20,
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
 * 获取一个景区
 * @returns 景区
 */
async function getOneScenicArea(param) {
  const res = await new Promise((resolve) => {
    let res = {
      data: {
        scenicArea: {
          id: 1,
          name: "故宫",
          img: require("@/assets/01gg.jpg"),
          introduction: "这是一段介绍",
          createTime: "2021-11-29",
          scenicSpotCount: 5,
        },
      },
    };

    resolve(res);
  });
  return res;
}

export { getScenicAreaList, getOneScenicArea };
