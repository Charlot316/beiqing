import axios from "axios";
import { message } from "antd";
import { assert } from "../utils";
import { HTTP_STATUS } from "../consts/statusCode";
import { API_BASEURL } from "../consts/env";
import logUtils from "./toolTypes/log_utils";
import {
  CONTENT_TYPE,
  RESPONSE_TYPE,
  DEFAULT_RESPONSE,
} from "../consts/request";

axios.defaults.withCredentials = true;
axios.defaults.timeout = 50000;
axios.defaults.headers.common["Content-Type"] = "application/json";

axios.defaults.baseURL = API_BASEURL;
// 中间件 拦截请求-
axios.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem("fems-user");
    if (userInfo) {
      const { access_token } = JSON.parse(userInfo);
      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  (response) => {
    // jwt认证失效
    // if (response?.data?.code === COMMON_STATUS.JWT_FAILED) {
    //   console.log(response);
    //   // window.location.href = '/login';
    // }
    return response;
  },
  (err) => {
    if (!err.response) {
      return;
    }
    const res = err.response;
    if (res.status === HTTP_STATUS.AUTHENTICATE) {
      window.location.href = "/login";
      return Promise.reject(err);
    } else {
      message.error(`${res.data.message}`);
      return Promise.reject(err);
    }
  }
);

const exceptionHandling = (data) => {
  if (!data) {
    return false;
  }

  if (
    data.status === HTTP_STATUS.SUCCESS ||
    data.status === HTTP_STATUS.POST_SUCCESS ||
    data.status === HTTP_STATUS.NOT_MODIFIED
  ) {
    return data;
  } else {
    assert(false, data.statusText);
  }
  return false;
};

const safeRequest = (url, options) => {
  return new Promise((resolve, reject) => {
    axios({
      method: options.method,
      ...options,
      url,
    }).then(
      (res) => {
        if (res) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      (err) => {
        logUtils.error(err);
        reject(err);
      }
    );
  });
};

/**
 * get
 * @param url
 * @param opts
 * @returns {Promise}
 */
const get = (url, opts = {}) => {
  return safeRequest(url, opts);
};

/**
 * post
 * @param url
 * @param data
 * @returns {Promise}
 */

const post = (
  url,
  data = {},
  headers = {
    "Content-Type": CONTENT_TYPE.FORM_DATA,
  },
  responseType = RESPONSE_TYPE.JSON
) => {
  const config = {
    method: "post",
    url,
    data,
    headers,
    responseType,
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then(
        (response) => {
          if (response && response.data) {
            resolve(response.data);
          } else {
            resolve(response);
          }
        },
        (error) => {
          reject(error);
        }
      )
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * patch
 * @param url
 * @param data
 * @returns {Promise}
 */

const patch = (
  url,
  data = {},
  headers = {
    "Content-Type": CONTENT_TYPE.JSON,
  },
  responseType = RESPONSE_TYPE.JSON
) => {
  const config = {
    method: "patch",
    url,
    data,
    headers,
    responseType,
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then(
        (response) => {
          if (response && response.data) {
            resolve(response.data);
          } else {
            resolve(response);
          }
        },
        (error) => {
          reject(error);
        }
      )
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * put
 * @param url
 * @param data
 * @returns {Promise}
 */

const put = (url, data = {}, format = CONTENT_TYPE.JSON) => {
  const config = {
    method: "put",
    url,
    data,
    headers: {
      "Content-Type": format,
    },
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then(
        (response) => {
          resolve(response.data);
        },
        (error) => {
          reject(error);
        }
      )
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * delete
 * @param url
 * @param data
 * @returns {Promise}
 */

const remove = (
  url,
  data = {},
  headers = {
    "Content-Type": CONTENT_TYPE.JSON,
  }
) => {
  const config = {
    method: "delete",
    url,
    data,
    headers,
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then(
        (response) => {
          resolve(response.data);
        },
        (error) => {
          reject(error);
        }
      )
      .catch((error) => {
        reject(error);
      });
  });
};

const formData = (params) => {
  let param = new FormData();
  var key;
  for (key in params) {
    param.append(key, params[key]);
  }
  return param;
};

const formGetUrl = (obj) => {
  let url = "?";
  for (let key in obj) {
    url += `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}&`;
  }
  return url.slice(0, -1);
};

export default {
  axios,
  get,
  post,
  put,
  patch,
  remove,
  formData,
  formGetUrl,
};
