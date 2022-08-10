import _ from "lodash";
import request from "../../utils/request";
import { API_BASEURL } from "../../consts/env";

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
 * @returns 英语的文字介绍
 */
async function getEnglishIntroduction() {
  const res = await new Promise((resolve) => {
    let res = {
      data: {
        content:
          '<p>Taihe Gate, located in the Forbidden City, Dongcheng District, Beijing, on the Middle Outer Road, is the main gate of the Outer Dynasty Palace in the Forbidden City.  was renamed Taihemen; it was burnt down in the 14th year of Guangxu in the Qing Dynasty (1888); it was rebuilt in the 15th year of Guangxu in the Qing Dynasty (1889).</p><p>The Taihe facade is 9 rooms wide, 4 rooms deep, and has a construction area of 1,300 square meters. It is covered with double eaves on the top of the mountain, and the bottom is a white marble base. Liang Fang and other components are painted with Hexi color painting. It is the largest palace gate in the Forbidden City in Beijing. In the Ming Dynasty, Taihe Gate was the place where "the imperial gate listened to the government", where the emperor accepted the adoration and memorials of his ministers, issued edicts, and dealt with political affairs.</p><p>Taihe has 9 rooms wide and 4 rooms deep, with a construction area of 1,300 square meters. The top is covered with double eaves and the top of the mountain, and the bottom is a white marble base. Liang Fang and other components are painted with Hexi colors. In front of the door is a pair of bronze lions and four bronze tripods, which are display bronzes cast in the Ming Dynasty.</p>',
      },
    };
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
    let res = {
      data: {
        content:
          '<p><span style="color: green">Taihe Gate, located in the Forbidden City, Dongcheng District, Beijing, on the Middle Outer Road, is the main gate of the Outer Dynasty Palace in the Forbidden City.</span> was renamed Taihemen; <span style="color: red">it was burnt down in the 14th year of Guangxu in the Qing Dynasty(1888);</span>it was rebuilt in the 15th year of Guangxu in the Qing Dynasty (1889).</p><p><span style="color: gold">The Taihe facade is 9 rooms wide, 4 rooms deep, and has a construction area of 1,300 square meters.</span> It is covered with double eaves on the top of the mountain, and the bottom is a white marble base. <span style="color: orange"> Liang Fang and other components are painted with Hexi color painting. It is the largest palace gate in the Forbidden City in Beijing.</span><span style="color: green">In the Ming Dynasty, Taihe Gate was the place where "the imperial gate listened to the government", where the emperor accepted the adoration and memorials of his ministers, issued edicts, and dealt with political affairs.</span></p><p><span style="color: green">Taihe has 9 rooms wide and 4 rooms deep, with a construction area of 1,300square meters. The top is covered with double eaves and the top of themountain, and the bottom is a white marble base. </span><span style="color: orange">Liang Fang and other components are painted with Hexi colors. In front of the door is a pair of bronze lions and four bronze tripods, which are display bronzes cast in the Ming Dynasty.</span></p>',
        grade: 80,
      },
    };
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
