import _ from "lodash";
import request from "../utils/request";
import { API_BASEURL } from "../consts/env";
import { TEACHER_TYPE, MANAGE_TYPE } from "../consts/views/login";
/**
 * 返回班级列表接口
 * @returns 返回所有班级列表
 */
async function getClassList() {
  const res = await request.get("/api/teacher/classes");
  return res;
}

/**
 * 用户名、密密码登录接口
 * @param {*} params
 * @returns
 */
async function login(params) {
  let url = "";
  if (params.userType == TEACHER_TYPE) {
    url = "/manageLogin";
  } else {
    url = "/manageLogin";
  }
  let param = new FormData();
  param.append("username", params.username);
  param.append("password", params.password);
  const res = await request.post(url, param);
  console.log(res);
  return res;
}

/**
 * 测试权限接口
 * @returns 返回所有班级列表
 */
async function getUserId() {
  const res = await request.post("/api/admin/test", {});
  return res;
}

/**
 * 获取菜单接口
 * @returns 返回所有班级列表
 */
async function getMenu() {
  const res = await request.get("/api/teacher/contents", {});
  return res;
}
export { getClassList, login, getUserId, getMenu };
