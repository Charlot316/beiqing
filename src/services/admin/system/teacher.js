import _ from "lodash";
import request from "../../../utils/request";
import { API_BASEURL } from "../../../consts/env";
import { message } from "antd";

/**
 * 返回教师列表接口
 * @returns 返回所有教师列表
 */
async function getTeacherList(params) {
  const res = await request.post("/GetTeacherList", request.formData(params));
  return res;
}

/**
 * 通过参数返回教师列表接口
 * @param {*} params 教师列表的页面参数等
 * @returns 教师列表
 */
async function getTeacherListByParams(params) {
  const res = await request.post(`/SeachOneTeacher`, request.formData(params));
  return res;
}

/**
 * 返回班级列表接口
 * @returns 返回所有班级列表
 */
async function getClassList(params) {
  const res = await request.post(
    `/GetTeacherClassList`,
    request.formData(params)
  );
  return res;
}

/**
 * 上传班级列表接口
 * @returns 返回所有班级列表
 */
async function teacherClassList(params) {
  var object = JSON.stringify(params.list);
  const res = await request.post(
    `/TeacherClassList`,
    request.formData({ list: object })
  );
  return res;
}

/**
 * 修改教师信息接口
 * @param {*} params 教师信息参数
 * @returns 返回所有班级列表
 */
async function editInfo(params) {
  const res = await request.post("/UpdateOneTeacher", request.formData(params));
  return res;
}

/**
 * 新增教师的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function addTeacher(params) {
  const res = await request.post("/AddTeacher", request.formData(params));
  return res;
}

/**
 * 修改密码的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function editPwd(params) {
  params.password = params.password1;
  const res = await request.post("/UpdateOneTeacher", request.formData(params));
  return res;
}

/**
 * 删除教师的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function removeTeacher(params) {
  const res = await request.post("/RemoveTeacher", request.formData(params));
  return res;
}
export {
  getTeacherList,
  getTeacherListByParams,
  getClassList,
  editInfo,
  addTeacher,
  editPwd,
  removeTeacher,
  teacherClassList,
};
