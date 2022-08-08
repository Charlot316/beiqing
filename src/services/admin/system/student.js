import _ from "lodash";
import request from "../../../utils/request";
import { API_BASEURL } from "../../../consts/env";
import { message } from "antd";

/**
 * 返回学生列表接口
 * @returns 返回所有学生列表
 */
async function getStudentList(params) {
  const res = await request.post("/GetStudentList", request.formData(params));
  return res;
}

/**
 * 通过参数返回学生列表接口
 * @param {*} params 学生列表的页面参数等
 * @returns 学生列表
 */
async function getStudentListByParams(params) {
  const res = await request.post(`/SeachOneStudent`, request.formData(params));
  return res;
}

/**
 * 返回班级列表接口
 * @returns 返回所有班级列表
 */
async function getClassList() {
  const res = await request.post(
    "/GetClassList",
    request.formData({ allclass: 0 })
  );
  return res;
}

/**
 * 上传班级列表接口
 * @returns 返回所有班级列表
 */
async function studentClassList(params) {
  var object = JSON.stringify(params.list);
  const res = await request.post(
    `/StudentClassList`,
    request.formData({ list: object })
  );
  return res;
}

/**
 * 修改学生信息接口
 * @param {*} params 学生信息参数
 * @returns 返回所有班级列表
 */
async function editInfo(params) {
  const res = await request.post("/UpdateOneStudent", request.formData(params));
  return res;
}

/**
 * 新增学生的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function addStudent(params) {
  const res = await request.post("/AddStudent", request.formData(params));
  return res;
}

/**
 * 修改密码的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function editPwd(params) {
  params.password = params.password1;
  const res = await request.post("/UpdateOneStudent", request.formData(params));
  return res;
}

/**
 * 删除学生的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function removeStudent(params) {
  const res = await request.post("/Removestudent", request.formData(params));
  return res;
}
export {
  getStudentList,
  getStudentListByParams,
  getClassList,
  editInfo,
  addStudent,
  editPwd,
  removeStudent,
  studentClassList,
};
