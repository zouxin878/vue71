import vue from 'vue'
import VueRouter from 'vue-router'
import Login from './component/Login'
import User from './component/User'

// 引入进度条
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
vue.use(VueRouter)

Nprogress.configure({ showSpinner: false })

const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    { path: '/user', component: User }
  ]
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  if (to.fullPath === '/') {
    console.log('33')
    next()
  } else {
    if (sessionStorage.getItem('cook')) {
      next()
    } else {
      next('/')
    }
  }
})

router.afterEach(() => {
  Nprogress.done()
})

export default router
