// 配置国际化
import Vue from "vue";
import VueI18n from "vue-i18n";
import Cookies from "js-cookie";
Vue.use(VueI18n);
// 自己的语言包
import en from "./en.js";
import zh from "./zh.js";
// element的语言包
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
// 合并自己的语言包 与 element的语言包
const messages = {
  en:{
    ...en,
    ...elementEnLocale
  },
  zh:{
    ...zh,
    ...elementZhLocale
  }
}

const i18n = new VueI18n({
  locale:Cookies.get('language')||'zh', //默认支持的语言类型 如果本地有的话取出来 默认为zh中文
  messages  // 设置语言包
});

export default i18n;