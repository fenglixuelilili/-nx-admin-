// 权限管理
import router from './router'
import store from "./store"
import Nprogress from "nprogress"
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from "element-ui";
import {gettoken} from "@/utils/auth.js"
import {setTitle} from "@/utils/util.js"

// 定义 不重定向白名单 就是不需要任何权限 任何人都可以进的页面  --目前只有登陆界面
const whiteList = ['/login']
// 核心代码
router.beforeEach((to, from, next) => {
    // 进入每个路由前先走一下条
    Nprogress.start()
    console.log(gettoken())
    if(gettoken()){//获取token 如果有token
        // 将浏览器的标头更新到全局 以便于下面设置标题
        // 
        store.commit('SET_BTOWSERHEADERTITLE', {
            title:to.name
        })
        next()
    }else{  //如果没有token
        console.log('如果没有token')
        if(whiteList.indexOf(to.path) != -1){//查看是否是白名单路径
            next()
        }else{
            next('/login')
            Nprogress.done()
        }
    }
})
router.afterEach( route => {
    // 路由结束之后操作
    Nprogress.done()
    // 设置浏览器的标头
    setTimeout(() => {
        let headertitle = store.getters.headertitle
        setTitle(headertitle)
    }, 0);
})
