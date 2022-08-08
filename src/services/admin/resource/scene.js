import _ from "lodash";
import request from "../../../utils/request";
import { API_BASEURL } from "../../../consts/env";
import { message } from "antd";

/**
 * 返回资源列表接口
 * @returns 返回所有资源列表
 */
async function getResourceList(params) {
  const res = await request.post("/GetResourceList", request.formData(params));
  console.log(res);
  return res;
}

/**
 * 返回一个资源接口
 * @returns 返回一个资源列表
 */
async function getOneResource(params) {
  const res = await request.post("/GetOneResource", request.formData(params));
  console.log(res);
  return res;
}
export { getResourceList, getOneResource };
