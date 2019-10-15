import axios from "axios";
import {baseUrl} from "@/config/env.js"
import { Message,MessageBox  } from "element-ui"
import {gettoken} from "@/utils/auth.js"
import store from "@/store"
var instance = axios.create({
    baseURL: '',
    timeout: 5000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(gettoken()){
        config.headers['X-Token'] = gettoken()
    }
    return config;
  }, function (error) {
    console.log(error,'请求错误')
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;   0 是正常的
    let res = response.data
    if(res.code !=0){
        if(res.code == 50008||res.code == 50012||res.code == 50014){
            MessageBox.confirm('您已经登出页面！点击确定登出当前页面', '警告', {
                confirmButtonText: '确定登出',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                //   登出操作 TODO
                // store.dispatch('logout')
              })
        }
    }else{
        return response.data;
    }
    
  }, function (error) {
    // 对响应错误做点什么
    console.log(error,'响应错误')
    return Promise.reject(error);
  });
  export default {
      http:instance
  }