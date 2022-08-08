import _ from "lodash";
import request from "../../../utils/request";
import { API_BASEURL } from "../../../consts/env";
import { message } from "antd";

/**
 * 返回课程列表
 * @returns 返回课程列表
 */
async function getCourseList() {
  const res = await request.post(
    "/GetCourseList",
    request.formData({ allclass: 1 })
  );
  return res;
}

/**
 * 返回章节
 * @param {*} params 参数等
 * @returns 章节列表
 */
async function getChapterList(params) {
  const res = await request.post(`/GetChapterList`, request.formData(params));
  return res;
}

/**
 * 场景列表
 * @param {*} params 参数等
 * @returns 场景列表
 */
async function getSectionList(params) {
  const res = await request.post(`/GetSectionList`, request.formData(params));
  return res;
}

/**
 * 具体的场景
 * @returns 具体的场景
 */
async function selectOneSectionScene(params) {
  const res = await request.post(
    `/SelectOneSectionScene`,
    request.formData(params)
  );
  return res;
}

export { getCourseList, getChapterList, selectOneSectionScene, getSectionList };
