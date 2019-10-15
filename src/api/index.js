import myaxios from "./ajax"
import axios from 'axios'
const base = ''
// 登陆相关的
// 用户名密码登陆
export function login(username, password) {
    return myaxios.http({
      url: '/user/login',
      method: 'post',
      data: {
        username,
        password
      }
    })
  }
  export function login2(username, password) {
    return myaxios.http({
      url: '/api/login',
      method: 'post',
      data: {
        username,
        password
      }
    })
  }
//   获取用户信息
  export function getInfo(token) {
    return myaxios.http({
      url: '/user/info',
      method: 'get',
      params: { token }
    })
  }
//   登出
  export function logout() {
    return myaxios.http({
        url: '/user/logout',
        method: 'post'
    })
}
// 文章相关的

export function fetchList(query) {
    return myaxios.http({
      url: '/article/list',
      method: 'get',
      params: query
    })
  }
  
  export function fetchArticle(id) {
    return myaxios.http({
      url: '/article/detail',
      method: 'get',
      params: { id }
    })
  }
  
  export function fetchPv(pv) {
    return myaxios.http({
      url: '/article/pv',
      method: 'get',
      params: { pv }
    })
  }
  
  export function createArticle(data) {
    return myaxios.http({
      url: '/article/create',
      method: 'post',
      data
    })
  }
  
  export function updateArticle(data) {
    return myaxios.http({
      url: '/article/update',
      method: 'post',
      data
    })
  }
//   地址
  export function getToken() {
    return myaxios.http({
      url: '/qiniu/upload/token', // 假地址 自行替换
      method: 'get'
    })
  }
//   搜索用户
  export function userSearch(name) {
    return myaxios.http({
      url: '/search/user',
      method: 'get',
      params: { name }
    })
  }
//   权限相关的
export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }) }

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }) }

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }) }

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }) }

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }) }

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }) }
// 权限相关的
// export function getUserListPage(params) {
//     return myaxios.http({
//       url: '/user/listpage',
//       method: 'get',
//       params: params
//     })
//   }
//   export function removeUser(params) {
//     return myaxios.http({
//       url: '/user/remove',
//       method: 'get',
//       params: params
//     })
//   }
//   export function batchRemoveUser(params) {
//     return myaxios.http({
//       url: '/user/batchremove',
//       method: 'get',
//       params: params
//     })
//   }
//   export function editUser(params) {
//     return myaxios.http({
//       url: '/user/edit',
//       method: 'get',
//       params: params
//     })
//   }
//   export function addUser(params) {
//     return myaxios.http({
//       url: '/user/add',
//       method: 'get',
//       params: params
//     })
//   }
  