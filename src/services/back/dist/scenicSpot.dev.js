"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScenicSpotList = getScenicSpotList;
exports.getOneScenicSpot = getOneScenicSpot;

var _lodash = _interopRequireDefault(require("lodash"));

var _request = _interopRequireDefault(require("../../utils/request"));

var _env = require("../../consts/env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 获取景点list
 * @returns 景点list
 */
function getScenicSpotList(param) {
  var res;
  return regeneratorRuntime.async(function getScenicSpotList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(new Promise(function (resolve) {
            var res = {
              data: {
                records: [{
                  name: "太和门",
                  img: require("@/assets/太和门.jpg"),
                  introduction: "这是一段介绍",
                  createTime: "2021-11-29",
                  scenicArea: "故宫（紫禁城）",
                  ChineseContent: "中文内容",
                  EnglishContent: "英文内容",
                  EnglishAudio: require("@/assets/Clair de Lune.mp3")
                }, {
                  name: "圆明园",
                  img: require("@/assets/02ymy.jpg"),
                  introduction: "这是一段介绍",
                  createTime: "2021-11-29",
                  scenicArea: "故宫（紫禁城）",
                  ChineseContent: "中文内容",
                  EnglishContent: "英文内容",
                  EnglishAudio: require("@/assets/Clair de Lune.mp3")
                }, {
                  name: "颐和园",
                  img: require("@/assets/03yhy.jpg"),
                  introduction: "这是一段介绍",
                  createTime: "2021-11-29",
                  scenicArea: "故宫（紫禁城）",
                  ChineseContent: "中文内容",
                  EnglishContent: "英文内容",
                  EnglishAudio: require("@/assets/Clair de Lune.mp3")
                }, {
                  name: "八达岭",
                  img: require("@/assets/04bdl.jpg"),
                  introduction: "这是一段介绍",
                  createTime: "2021-11-29",
                  scenicArea: "故宫（紫禁城）",
                  ChineseContent: "中文内容",
                  EnglishContent: "英文内容",
                  EnglishAudio: require("@/assets/Clair de Lune.mp3")
                }, {
                  name: "潭柘寺",
                  img: require("@/assets/05tzs.jpg"),
                  introduction: "这是一段介绍",
                  createTime: "2021-11-29",
                  scenicArea: "故宫（紫禁城）",
                  ChineseContent: "中文内容",
                  EnglishContent: "英文内容",
                  EnglishAudio: require("@/assets/Clair de Lune.mp3")
                }]
              }
            };
            resolve(res);
          }));

        case 2:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}
/**
 * 获取一个景区
 * @returns 景区
 */


function getOneScenicSpot(param) {
  var res;
  return regeneratorRuntime.async(function getOneScenicSpot$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(new Promise(function (resolve) {
            var res = {
              data: {
                scenicSpot: {
                  name: "太和门",
                  img: require("@/assets/太和门.jpg"),
                  introduction: "这是一段介绍",
                  createTime: "2021-11-29",
                  scenicArea: "故宫（紫禁城）",
                  ChineseContent: "中文内容",
                  EnglishContent: "英文内容",
                  EnglishAudio: require("@/assets/Clair de Lune.mp3")
                }
              }
            };
            resolve(res);
          }));

        case 2:
          res = _context2.sent;
          return _context2.abrupt("return", res);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}