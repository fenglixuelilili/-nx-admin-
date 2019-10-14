let baseUrl = '';//跟路径地址

const iconfontVersion = ['567566_r22zi6t8noas8aor'];
let iconfontUrl = '//at.alicdn.com/t/font_$key.css' //阿里巴巴图标的地址

const codeUrl =  `${baseUrl}/code`;
const env = process.env;
if(env.NODE_ENV == 'production'){
  // 生成环境地址
  baseUrl = `https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin`;
}else if(env.NODE_ENV == 'development'){
  // 开发环境地址
  baseUrl = `https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin`;
}else if(env.NODE_ENV == 'test'){
  // 测试环境地址
  baseUrl = `https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin`;
}
export {
  baseUrl,
  iconfontVersion,
  iconfontUrl,
  codeUrl,
  env
}