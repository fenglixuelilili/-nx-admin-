import {gettoken,settoken,removetoken } from "@/utils"
import {request} from "@/api"
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
    let username = userinfo.name.trim()
    return new Promise((resolve,reject)=>{
      request('/api/login',{
        username,
        password:userinfo
      }).then(data=>{
        if(data.state == 0){

        }else{
          let tokenvalue = data.data
          commit('SET_TOKEN',tokenvalue)
          resolve()
        }
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
