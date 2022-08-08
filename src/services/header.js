import _ from "lodash";
import request from "../utils/request";
import { API_BASEURL } from "../consts/env";

/*
用来写header的logout还有更改密码
*/

/**
 * 学生登出
 * @returns
 */
async function studentLogout() {
  const res = await request.post("/api/student/logout");
  return res;
}

/**
 * 教师登出
 * @returns
 */
async function teacherLogout() {
  const res = await request.post("/api/teacher/logout");
  return res;
}

/**
 * 管理员登出
 * @returns
 */
async function adminLogout() {
  const res = await request.post("/api/admin/logout");
  return res;
}

/**
 * 学生修改密码的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function editStudentPwd(params) {
  const res = await request.patch("/api/student/password", params);
  return res;
}

/**
 * 老师修改密码的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function editTeacherPwd(params) {
  const res = await request.patch("/api/teacher/password", params);
  return res;
}

/**
 * 管理员修改密码的接口
 * @param {*} params
 * @returns 返回成功与否的消息
 */
async function editAdminPwd(params) {
  const res = await request.patch("/api/admin/adminPassword", params);
  return res;
}

export {
  studentLogout,
  teacherLogout,
  adminLogout,
  editStudentPwd,
  editTeacherPwd,
  editAdminPwd,
};
