const OAuth = () => import('../views/OAuth.vue')
const Home = () => import('../views/Home.vue')
const List = () => import('../views/List.vue')
const Vedio = () => import('../views/Vedio.vue')
const User = () => import('../views/User.vue')
const Read = () => import('../views/Read.vue')


export default [
  /************** 授权 **************/
  {
    path: '/oauth',
    name: 'oauth',
    meta: {
      title: '授权'
    },
    component: OAuth
  },
  /**设置跟路由 */
  {
    path: '/(null)?',
    redirect: '/home'
  },
  {
    path: '/home',
    name: "Home",
    component: Home
  },
  {
    path: '/List',
    name: "List",
    component: List
  },
  {
    path: '/Vedio',
    name: "Vedio",
    component: Vedio
  },
  {
    path: '/User',
    name: "User",
    component: User
  },
  {
    path: '/Read',
    name: "Read",
    component: Read
  }
];
