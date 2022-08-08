// 判断当前是哪个环境
export const currentEnv = process.env.FIG_ENV;
const ctext = currentEnv !== "prod" ? `开课吧${currentEnv}` : "开课吧";

// 不要删除，用来识别当前项目环境
// eslint-disable-next-line
console.info(
  `\n %c ${ctext} %c https://superzero.cn \n`,
  "color: #fff; background: #03a8e8; padding:5px 0; font-size:12px;font-weight: bold;",
  "background: #03a8e8; padding:5px 0; font-size:12px;"
);

export const isDevEnv = currentEnv === "dev";
export const isPreEnv = currentEnv === "pre";
export const isTestEnv = currentEnv === "test";
export const isProdEnv = currentEnv === "prod";

const apiPrefix = {
  dev: "dev",
  test: "test",
  pre: "pre",
  prod: "",
};

// sentry配置信息
// export const SENTRY_DSN = `https://70d2562742f9491786a7ae2852ab702e@am.superzero/65`;
// export const SENTRY_CONFIG = {
//   dsn: SENTRY_DSN,
//   environment: currentEnv,
// };

const cmsBaseUrl = {
  dev: "http://localhost:8090/api/",
  test: "http://localhost:8090/api/",
  pre: "http://localhost:8090/",
  prod: "http://localhost:8090/",
}[currentEnv];

// export const getApiPrefix = apiPrefix[currentEnv];
export const API_BASEURL = cmsBaseUrl;
export const QINIU_BASEURL = cmsBaseUrl;
export const QINIU_IMG_HOST = `https://img.superzero/`;
