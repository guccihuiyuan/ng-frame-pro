/**
 * HTTP_API前缀
 * 一个IP对应一个分类，前缀名自定，根据自定的前缀名可方便在请求/响应拦截器里做处理
 */
const API_MAIN_PREFIX = '/visual';

/**
 * HTTP_APIS
 * 与前缀建立相同的分类
 * 方法名规范：REST方法_名称...
 */
export const API_CONFIG = {
  // 主业务
  MAIN: {
    // 用户模块
    USER: {
      GET_USER: API_MAIN_PREFIX + '/user/get',
      GET_LIST: API_MAIN_PREFIX + '/user/list',
      POST_ADD: API_MAIN_PREFIX + '/user/add',
      PUT_UPDATE: API_MAIN_PREFIX + '/user/update',
      DELETE_USER: API_MAIN_PREFIX + '/user/update',
    }
  },
  // 第三方
  ALI_PAY: {// 比如阿里巴巴

  }
};
