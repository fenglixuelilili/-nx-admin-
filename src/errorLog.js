import store from "./store";
import Vue from "vue";
Vue.config.errorHandler = function(err,vm,info){
  Vue.nextTick(()=>{
    store.dispatch('addErrorLogs',{  //dispash的时候不需要写二级名字了 直接dispash名字就行  只有在写store的时候写二级名字
      url:window.location.href,
      err,
      vm,
      info
    })
  })
}
// 没有导出 那直接就引入到main.js中就可以了