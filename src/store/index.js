import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters.js"

// app用户资源
import app from "./modules/app";
// 公共资源
import common from "./modules/common";
// 错误日志
import errorLog from "./modules/errorLog";
// 全屏
import fullScreen from "./modules/fullScreen";
// 每个窗口资源
import tagsView from "./modules/tagsView";
import user from "./modules/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    app,
    common,
    user,
    fullScreen,
    tagsView,
    errorLog
  },
  getters
});
export default store;
