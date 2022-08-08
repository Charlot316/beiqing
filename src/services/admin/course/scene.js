import _ from "lodash";
import request from "../../../utils/request";
import { API_BASEURL } from "../../../consts/env";
import { message } from "antd";

/**
 * 返回课程列表
 * @returns 返回课程列表
 */
async function selectOneSectionScene(params) {
  const res = await request.post(
    "/SelectOneSectionScene",
    request.formData(params)
  );
  return res;
}

export { selectOneSectionScene };
