import { routeList } from '../routes/subRoutes';

// 导航栏数据
export const menuDatas = {
  ...routeList?.reduce((preValues, curValue) => {
    if (curValue.name) preValues[curValue.name] = curValue.path;
    return preValues;
  }, {}),
};

// 路由菜单映射
export const routerMenuMap = {
  ...routeList?.reduce((preValues, curValue) => {
    if (curValue.path) preValues[curValue.path] = curValue;
    return preValues;
  }, {}),
};

// 获取导航path数据
export const getMeunPath = (name) => {
  const selectData = menuDatas[name];

  if (selectData) {
    return {
      name,
      path: selectData,
    };
  }
  return { name };
};
