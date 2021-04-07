const OAuth = () => import('../views/OAuth.vue')
const Home = () => import('../views/Home.vue')
const List = () => import('../views/List.vue')
const Vedio = () => import('../views/Vedio.vue')
const User = () => import('../views/User.vue')
const Pdf = () => import('../views/Pdf.vue')
const Users = () => import('../views/Users.vue')
const Pdf1 = () => import('../views/Pdf1.vue')
const Pdf2 = () => import('../views/Pdf2.vue')
const Member = () => import('../views/Member.vue')



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
    path: '/Pdf',
    name: "Pdf",
    component: Pdf
  },
  {
    path: '/Users',
    name: "Users",
    component: Users
  },
  {
    path: '/Pdf1',
    name: "Pdf1",
    component: Pdf1
  },
  {
    path: '/Pdf2',
    name: "Pdf2",
    component: Pdf2
  },
  {
    path: '/Member',
    name: "Member",
    component: Member
  },
];
