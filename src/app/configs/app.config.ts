/**
 * APP配置
 */
export const APP_CONFIG = {
  // 后台LOGO路径
  LAYOUT_ADMIN_LOGO_PATH: {
    LOGO: './assets/logo-full.svg',
    LOGO_MINI: './assets/logo.svg'
  },
  // 路由配置
  ROUTER: {

  },
  // 正则表达式
  REGEX: {
    // 没有空格
    NO_SPACES: '^\\S*$',
    // 密码
    // 包含大小写字母、数字、特殊字符至少2种，且为6-18位
    PASSWORD: '^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[\\\\(\\\\)])+$)([^(0-9a-zA-Z)]|[\\\\(\\\\)]|[a-z]|[A-Z]|[0-9]){6,18}$',
    // 手机号码
    PHONE: '^1[0-9]{10}$'
  }
};
