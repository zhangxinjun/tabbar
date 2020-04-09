import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 通过路由懒加载引入各个组件
const Home = () => import("../views/home/Home.vue")
const About = () => import("../views/about/About.vue")
const ShopCat = () => import("../views/shopCat/ShopCat.vue")
const Profile = () => import("../views/profile/Profile.vue")


const routes = [
  {
    path: '/',
    redirect: "/home"
  },{
    path:"/home",
    component:Home
  }
  ,{
    path:"/about",
    component:About
  }
  ,{
    path:"/shopCat",
    component:ShopCat
  },{
    path:"/profile",
    component:Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
