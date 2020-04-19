import Vue from 'vue'
//导入路由
import router from 'vue-router'

//Vue全局使用Router
Vue.use(router)

export default new router({
    routes:[
        {
            path:"/",
            name:'login',
            component:'login'
        }


    ]
})