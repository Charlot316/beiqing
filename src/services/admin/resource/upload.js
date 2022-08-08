import _ from "lodash";
import request from "../../../utils/request";
import { API_BASEURL } from "../../../consts/env";

/**
 * 通过参数返回班级列表接口
 * @param {*} params 班级列表的页面参数等
 * @returns 班级列表
 */
async function getClassListByParams(params) {
  let url = request.formGetUrl(params);
  const res = await request.get(`/api/admin/classes${url}`);
  return res;
}

/**
 * 返回班级列表接口
 * @returns 返回所有班级列表
 */
async function getClassList() {
  const res = await request.get("/api/admin/classes");
  return res;
}

/**
 * 修改班级信息接口
 * @param {*} params 班级信息参数
 * @returns 返回所有班级列表
 */
async function editInfo(params) {
  const res = await request.put("/api/admin/classes", params);
  return res;
}

/**
 * 新增班级的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function addClass(params) {
  const res = await request.post("/api/admin/classes", params);
  return res;
}

export { getClassListByParams, getClassList, editInfo, addClass };
