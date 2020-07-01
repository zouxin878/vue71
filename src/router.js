import vue from 'vue'
import VueRouter from 'vue-router'
import Login from './component/Login'
import User from './component/User'

vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    { path: '/user', component: User }
  ]
})

export default router
