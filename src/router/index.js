import Vue from 'vue'
import Router from 'vue-router'
import BaseCom from "@/views/BaseCom/BaseCom.vue"
Vue.use(Router)

const constantRouterMap = [
  // 当访问根路径，默认跳转的路由
  {
    path:'',
    redirect: {
      name:'index'
    }
  },
  {
    name:'login',
    path:'/login',
    component:()=>import('@/views/pages/login'),
    hidden:true
  },
  {
    path:'/index',
    component:BaseCom,
    children:[
      {
        name:'index',
        path:'indexpage',
        component:()=>import('@/views/pages/indexpage'),
        meta:{
          title:'indexpage',icon:'none'
        }
      }
    ]
  }
]
export default new Router({
  routes: constantRouterMap
})
export const asyncrouters = {

}
