//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

//路由配置的信息
export default [
  {
    path: "/shopcart",
    name:'shopcart',
    component: ShopCart,
    meta: { showFooter: true }
    
  }
  ,
  {
    path: "/addcartsuccess",
    name:'addcartsuccess',
    component: AddCartSuccess,
    meta: { showFooter: true }
  }
  ,
  {
    path: "/detail/:skuId",
    component: Detail,
    meta: { showFooter: true }
  }
  ,
  {
    path: "/home",
    component: Home,
    meta: { showFooter: true }
  }
  ,
  {
    path: "/search/:keyword?",
    component: Search,
    name: "search",
    meta: { showFooter: true },
    //路由组件能不能传递props数据？
    //布尔值写法:params
    // props:true,

    //对象写法:额外的给路由组件传递一些props
    // props:{a:1,b:2},

    //函数写法：可以params参数，query参数，通过props传递给路由组件
    props: ($route) => ({ keyword: $route.params.keyword, k: $route.query.k })

  }
  ,
  {
    path: "/login",
    component: Login,
    meta: { showFooter: false }
  }
  ,
  {
    path: "/register",
    component: Register,
    meta: { showFooter: false }
  }
  ,
  //重定向,在项目跑起来的时候,访问/,立马让他定向到首页
  {
    path: '*',
    redirect: "/home"
  }
]