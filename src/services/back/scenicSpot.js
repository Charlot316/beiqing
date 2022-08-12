import _ from "lodash";
import request from "../../utils/request";
import { API_BASEURL } from "../../consts/env";

/**
 * 获取景点list
 * @returns 景点list
 */
async function getScenicSpotList(param) {
  const res = await new Promise((resolve) => {
    let res = {
      data: {
        records: [
          {
            id: 1,
            name: "太和门",
            img: require("@/assets/太和门.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicArea: "故宫（紫禁城）",
            ChineseContent: "中文内容",
            EnglishContent: "英文内容",
            EnglishAudio: require("@/assets/Clair de Lune.mp3"),
          },
          {
            id: 2,
            name: "太和殿",
            img: require("@/assets/02ymy.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicArea: "故宫（紫禁城）",
            ChineseContent: "中文内容",
            EnglishContent: "英文内容",
            EnglishAudio: require("@/assets/Clair de Lune.mp3"),
          },
          {
            id: 3,
            name: "中和殿",
            img: require("@/assets/03yhy.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicArea: "故宫（紫禁城）",
            ChineseContent: "中文内容",
            EnglishContent: "英文内容",
            EnglishAudio: require("@/assets/Clair de Lune.mp3"),
          },
          {
            id: 4,
            name: "保和殿",
            img: require("@/assets/04bdl.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicArea: "故宫（紫禁城）",
            ChineseContent: "中文内容",
            EnglishContent: "英文内容",
            EnglishAudio: require("@/assets/Clair de Lune.mp3"),
          },
          {
            id: 5,
            name: "乾清宫",
            img: require("@/assets/05tzs.jpg"),
            introduction: "这是一段介绍",
            createTime: "2021-11-29",
            scenicArea: "故宫（紫禁城）",
            ChineseContent: "中文内容",
            EnglishContent: "英文内容",
            EnglishAudio: require("@/assets/Clair de Lune.mp3"),
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
async function getOneScenicSpot(param) {
  const res = await new Promise((resolve) => {
    let res = {
      data: {
        scenicSpot: {
          id: 1,
          name: "太和门",
          img: require("@/assets/太和门.jpg"),
          introduction: "这是一段介绍",
          createTime: "2021-11-29",
          scenicArea: "故宫（紫禁城）",
          ChineseContent: "中文内容",
          EnglishContent: "英文内容",
          EnglishAudio: require("@/assets/Clair de Lune.mp3"),
        },
      },
    };

    resolve(res);
  });
  return res;
}
export { getScenicSpotList, getOneScenicSpot };
