import _ from "lodash";
import request from "../../../utils/request";
import { API_BASEURL } from "../../../consts/env";
import { message } from "antd";

/**
 * 返回教师列表接口
 * @returns 返回所有教师列表
 */
async function getClassroomList(params) {
  const res = await request.post("/GetClassroomList", request.formData(params));
  console.log(res);
  return res;
}

/**
 * 通过参数返回教师列表接口
 * @param {*} params 教师列表的页面参数等
 * @returns 教师列表
 */
async function getClassroomListByParams(params) {
  const res = await request.post(
    `/SeachOneClassroom`,
    request.formData(params)
  );
  return res;
}

/**
 * 返回班级列表接口
 * @returns 返回所有班级列表
 */
async function getClassList(params) {
  const res = await request.post(
    `/GetClassroomClassList`,
    request.formData(params)
  );
  return res;
}

/**
 * 上传班级列表接口
 * @returns 返回所有班级列表
 */
async function classroomClassList(params) {
  var object = JSON.stringify(params.list);
  const res = await request.post(
    `/ClassroomClassList`,
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
  const res = await request.post(
    "/UpdateOneClassroom",
    request.formData(params)
  );
  return res;
}

/**
 * 新增教师的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function addClassroom(params) {
  const res = await request.post("/AddClassroom", request.formData(params));
  return res;
}

/**
 * 修改密码的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function editPwd(params) {
  params.password = params.password1;
  const res = await request.post(
    "/UpdateOneClassroom",
    request.formData(params)
  );
  return res;
}

/**
 * 删除教师的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function removeClassroom(params) {
  const res = await request.post("/RemoveClassroom", request.formData(params));
  return res;
}
export {
  getClassroomList,
  getClassroomListByParams,
  getClassList,
  editInfo,
  addClassroom,
  editPwd,
  removeClassroom,
  classroomClassList,
};
