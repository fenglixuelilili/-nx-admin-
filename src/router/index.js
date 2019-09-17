import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRouterMap = [
  {
    name:'login',
    path:'/login',
    component:()=>import('@/views/pages/login'),
    hidden:true
  }
]
export default new Router({
  routes: constantRouterMap
})
export const asyncrouters = {

}
