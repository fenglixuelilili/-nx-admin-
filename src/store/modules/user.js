import {gettoken,settoken,removetoken } from "@/utils/auth"
import {login,login2} from "@/api"
const state = {
  token:gettoken()
};
const mutations = {
  "SET_TOKEN"(state,value){
    state.token = value
  }
};

const actions = {
  'login'({state,commit},userinfo){
    // console.log(userinfo,'userinfo')
    let username = userinfo.name.trim()
    let password = userinfo.password
    return new Promise((resolve,reject)=>{
      login(username,userinfo).then(data=>{
        // console.log(data)
        // 存下token：
        settoken(data.token)
        // 将token存到全局
        commit('SET_TOKEN',data.token)
        resolve()
      }).catch(error=>{
        reject(error)
      })
    }) 
  }
};
export default {
  state,
  mutations,
  actions
}
