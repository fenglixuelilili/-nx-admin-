// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "@/store"
import myaxios from "@/api/ajax.js"
// 模拟接口数据
import './mock'
// element ui 框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// css 系列
import 'normalize.css/normalize.css';// 样式重置
import "@/styles/index.scss";//共有的全局样式

// 错误日志
import "./errorLog";
// 引内置入语言包
import locale from 'element-ui/lib/locale/lang/en';

import {
  iconfontVersion,
  iconfontUrl
} from "@/config/env";
import '@/icons'

Vue.use(ElementUI, { locale }); 
// 引入自己的语言包
import i18n from "./lang";
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
import {
  loadStyle
} from './utils/util';

import * as filters from '@/filters';
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key])
})
// 动态把阿里的云图标加载进来
iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace('$key', ele))
})

Vue.config.productionTip = false
Vue.prototype.$http = myaxios.http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})