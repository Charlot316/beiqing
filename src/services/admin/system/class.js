import _ from "lodash";
import request from "../../../utils/request";
import { API_BASEURL } from "../../../consts/env";
import { message } from "antd";

/**
 * 通过参数返回教师列表接口
 * @param {*} params 教师列表的页面参数等
 * @returns 教师列表
 */
async function getClassListByParams(params) {
  const res = await request.post(`/SeachOneClass`, request.formData(params));
  return res;
}

/**
 * 返回班级列表接口
 * @returns 返回所有班级列表
 */
async function getClassList(params) {
  const res = await request.post(`/GetClassList`, request.formData(params));
  return res;
}

/**
 * 获取班级列表接口
 * @returns 返回所有班级列表
 */
async function getClassCourseList(params) {
  console.log(params);
  const res = await request.post(
    `/GetClassCourseList`,
    request.formData({ classid: params.classid })
  );
  return res;
}

/**
 * 上传班级列表接口
 * @returns 返回所有班级列表
 */
async function classCourseList(params) {
  var object = JSON.stringify(params.list);
  const res = await request.post(
    `/ClassCourseList`,
    request.formData({ list: object, classid: params.id })
  );
  return res;
}

/**
 * 修改教师信息接口
 * @param {*} params 教师信息参数
 * @returns 返回所有班级列表
 */
async function editInfo(params) {
  console.log(params);
  const res = await request.post("/UpdateOneClass", request.formData(params));
  return res;
}

/**
 * 新增教师的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function addClass(params) {
  console.log(params);
  let param = new FormData();
  var key;
  for (key in params) {
    param.append(key, params[key]);
  }
  const res = await request.post("/AddClass", param);
  return res;
}

/**
 * 删除教师的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function removeClass(params) {
  console.log(params);
  const res = await request.post("/RemoveClass", request.formData(params));
  return res;
}
export {
  getClassListByParams,
  getClassList,
  editInfo,
  addClass,
  removeClass,
  classCourseList,
  getClassCourseList,
};
