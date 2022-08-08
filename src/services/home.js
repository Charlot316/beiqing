import _ from "lodash";
import request from "../utils/request";
import { API_BASEURL } from "../consts/env";

/**
 * 图像列表
 * @returns 图像列表
 */
async function getImageList(param) {
  const res = await new Promise((resolve) => {
    let res = { data: {} };
    if (param.page == 1) {
      res.data = {
        list: [
          {
            name: "故宫",
            img: require("@/assets/01gg.jpg"),
          },
          {
            name: "圆明园",
            img: require("@/assets/02ymy.jpg"),
          },
          {
            name: "颐和园",
            img: require("@/assets/03yhy.jpg"),
          },
          {
            name: "八达岭",
            img: require("@/assets/04bdl.jpg"),
          },
          {
            name: "潭柘寺",
            img: require("@/assets/05tzs.jpg"),
          },
          {
            name: "天坛",
            img: require("@/assets/06tt.jpg"),
          },
          {
            name: "卢沟桥",
            img: require("@/assets/07lgq.jpg"),
          },
          {
            name: "天安门",
            img: require("@/assets/08tam.jpg"),
          },
          {
            name: "嘉峪关",
            img: require("@/assets/09jyg.jpg"),
          },
          {
            name: "晋祠",
            img: require("@/assets/10jc.jpg"),
          },
        ],
        total: 10,
      };
    }
    if (param.page == 2) {
      res.data = {
        list: [
          {
            name: "拙政园",
            img: require("@/assets/11zzy.jpg"),
          },
          {
            name: "孔庙",
            img: require("@/assets/12km.jpg"),
          },
          {
            name: "黄山",
            img: require("@/assets/13hs.jpg"),
          },
          {
            name: "张掖七彩丹霞",
            img: require("@/assets/14zyqcdx.jpg"),
          },
          {
            name: "泰姬陵",
            img: require("@/assets/15tjl.jpg"),
          },
          {
            name: "金字塔",
            img: require("@/assets/16jzt.jpg"),
          },
          {
            name: "香港",
            img: require("@/assets/17xg.jpg"),
          },
          {
            name: "巴黎",
            img: require("@/assets/18bl.jpg"),
          },
          {
            name: "巴塞罗那",
            img: require("@/assets/19bsln.jpg"),
          },
          {
            name: "莫斯科",
            img: require("@/assets/20msk.jpg"),
          },
        ],
        total: 10,
      };
    }
    resolve(res);
  });
  return res;
}

/**
 * 全景背景图
 * @returns 全景背景图
 */
async function getBackgroundImage() {
  const res = await new Promise((resolve) => {
    let res = { data: {} };
    res.data.image = require("@/assets/太和门.jpg");
    resolve(res);
  });
  return res;
}
export { getImageList, getBackgroundImage };
