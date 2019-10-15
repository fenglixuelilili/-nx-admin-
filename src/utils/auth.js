import jsCookie from "js-cookie"
let token = 'token'
export const gettoken=()=>{
   return jsCookie.get(token)
}
export const settoken=()=>{
    return jsCookie.set(token)
}
export const removetoken=()=>{
    return jsCookie.remove(token)
}