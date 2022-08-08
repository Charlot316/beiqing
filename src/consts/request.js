export const CONTENT_TYPE = {
    URLENCODED: 'application/x-www-form-urlencoded',
    JSON: 'application/json',
    FORM_DATA: 'multipart/form-data',
  }
  
  export const RESPONSE_TYPE = {
    JSON: 'json',
    ARRAY_BUFFER: 'arraybuffer',
  }
  
  export const REGEXP = {
    EMAIL: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
    PHONE: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
  }
  
  export const RES_STATUS = {
    OK: 0,
    NO: 1,
  }
  
  export const DEFAULT_RESPONSE = {
    code: 500,
    data: null,
    msg: '接口报错，请检查服务！',
  }
  