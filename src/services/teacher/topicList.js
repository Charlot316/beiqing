import _ from "lodash";
import request from "../../utils/request";
import { API_BASEURL } from "../../consts/env";

/**
 * 通过参数返回分数列表接口
 * @param {*} params 分数列表的页面参数等
 * @returns 分数列表
 */
async function getTopicListByParams(params) {
  let url = request.formGetUrl(params);
  const res = await request.get(`/api/teacher/studentScore${url}`);
  return res;
}

/**
 * 上课接口
 * @param {*} params
 * @returns
 */
async function classStarting(params) {
  const res = await request.post("/api/teacher/classStarting", params);
  return res;
}

/**
 * 下课接口
 * @param {*} params
 * @returns
 */
async function classFinishing(params) {
  const res = await request.post("/api/teacher/classFinishing", params);
  return res;
}

/**
 * 暂停接口
 * @param {*} params
 * @returns
 */
async function classPausing(params) {
  const res = await request.post("/api/teacher/classStopping", params);
  return res;
}
export { getTopicListByParams, classStarting, classFinishing, classPausing };
