import jsCookie from "js-cookie"
let token = 'token'
export const getCookie=()=>{
   return jsCookie.get(token)
}
export const setCookie=()=>{
    return jsCookie.set(token)
}
export const removeCookie=()=>{
    return jsCookie.remove(token)
}