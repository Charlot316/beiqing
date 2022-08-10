import _ from "lodash";
import request from "../utils/request";
import { API_BASEURL } from "../consts/env";

/**
 * 景区介绍界面获取文字介绍
 * @returns 文字介绍
 */
async function getIntroduction(param) {
  const res = await new Promise((resolve) => {
    let res = {
      data: {
        content:
          "<p>太和门，位于北京市东城区北京故宫内，处于外朝中路，是故宫外朝宫殿的正门，建成于明永乐十八年（1420年） ，时称奉天门;清1治二年（1645年） 改名为太和门：清光绪十四年（1888年）被焚毁：清光绪十五年（1889年）重建。</p><p>太和门面阔9间，进深4间，建筑面积1300平方米，上覆重格歇山顶，下为汉白玉基座，梁枋等构件施以和玺彩画，是北京故宫内最大的宫门。太和门在明代是“御门听政”之处，皇帝在此接受臣下的朝拜和上奏，领发诏令，处理攻事。</p><p>太和门面调9间，进深4间，建筑面积1300平方米。上覆重格歇山顶，下为汉白玉基座，梁枋等构件施以和玺彩画。门前列铜狮一对，铜鼎四只，为明代铸造的陈设铜器。</p><p>太和门有面积约26000平方米的广场，内金水河自西向东蜿蜒流过。河上横架五座石桥，习称内金水桥。太和门广场左右各设一门，东为昭德门（明代称弘政门），西为贞度门（明代称宣治门）。清光绪十四年(1888年） 贞度门失火，从而殃及太和门 与昭德门，太和门广场两侧还有排列整齐的廊庑，习称东、西朝房，并有协和门（明代称会极门）和照和门（明代称归极门）东西对峙。</p>",
      },
    };

    resolve(res);
  });
  return res;
}

/**
 * 导游讲解界面获取带语音的文字介绍
 * @returns 带语音的文字介绍
 */
async function getIntroductionWithAudio() {
  const res = await new Promise((resolve) => {
    let res = {
      data: {
        content:
          "<p>太和门，位于北京市东城区北京故宫内，处于外朝中路，是故宫外朝宫殿的正门，建成于明永乐十八年（1420年） ，时称奉天门;清1治二年（1645年） 改名为太和门：清光绪十四年（1888年）被焚毁：清光绪十五年（1889年）重建。</p><p>太和门面阔9间，进深4间，建筑面积1300平方米，上覆重格歇山顶，下为汉白玉基座，梁枋等构件施以和玺彩画，是北京故宫内最大的宫门。太和门在明代是“御门听政”之处，皇帝在此接受臣下的朝拜和上奏，领发诏令，处理攻事。</p><p>太和门面调9间，进深4间，建筑面积1300平方米。上覆重格歇山顶，下为汉白玉基座，梁枋等构件施以和玺彩画。门前列铜狮一对，铜鼎四只，为明代铸造的陈设铜器。</p><p>太和门有面积约26000平方米的广场，内金水河自西向东蜿蜒流过。河上横架五座石桥，习称内金水桥。太和门广场左右各设一门，东为昭德门（明代称弘政门），西为贞度门（明代称宣治门）。清光绪十四年(1888年） 贞度门失火，从而殃及太和门 与昭德门，太和门广场两侧还有排列整齐的廊庑，习称东、西朝房，并有协和门（明代称会极门）和照和门（明代称归极门）东西对峙。</p>",
        audio: require("@/assets/Clair de Lune.mp3"),
      },
    };
    resolve(res);
  });
  return res;
}

/**
 * 英语导游练习获取文字介绍
 * @returns 带语音的文字介绍
 */
async function getEnglishIntroduction(param) {
  const res = await new Promise((resolve) => {
    let res = { data: {} };
    resolve(res);
  });
  return res;
}

/**
 * 英语导游练习获取文字介绍
 * @returns 评价后的文字的html以及成绩
 */
async function uploadEnglishPractice(param) {
  const res = await new Promise((resolve) => {
    let res = { data: {} };
    resolve(res);
  });
  return res;
}

/**
 * 上传内容创新界面的表单
 * @returns 成功与否
 */
async function uploadContentInnovation(param) {
  const res = await new Promise((resolve) => {
    let res = { data: {} };
    resolve(res);
  });
  return res;
}
export {
  getIntroduction,
  getIntroductionWithAudio,
  getEnglishIntroduction,
  uploadEnglishPractice,
  uploadContentInnovation,
};
