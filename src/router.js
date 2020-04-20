import VueRouter from 'vue-router'

import Changyong from './components/Changyong.vue'
import Yule from './components/Yule.vue'
import Xuexi from './components/Xuexi.vue'
import Shenghuo from './components/Shenghuo.vue'
import Jishu from './components/Jishu.vue'
import Sheji from './components/Sheji.vue'
import Fenxiang from './components/Fenxiang.vue'

const router =new VueRouter({
    routes:[
        // {path:'/', redirect: '/index'},
        {path:'/', component: Fenxiang},
        {path:'/changyong', component: Changyong},
        {path:'/yule', component: Yule},
        {path:'/xuexi', component: Xuexi},
        {path:'/shenghuo', component: Shenghuo},
        {path:'/jishu', component: Jishu},
        {path:'/sheji', component: Sheji},
        // {path:'/index', component: Fenxiang},
    ],
    mode:'history'
})

export default router