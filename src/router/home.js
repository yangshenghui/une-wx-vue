const OAuth = () => import('../views/OAuth.vue')
const Home = () => import('../views/Home.vue')
const List = () => import('../views/List.vue')
const Vedio = () => import('../views/Vedio.vue')
const User = () => import('../views/User.vue')
const PdfList = () => import('../views/PdfList.vue')
const PdfUser = () => import('../views/PdfUser.vue')
const PdfDetail = () => import('../views/PdfDetail.vue')
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
    path: '/PdfList',
    name: "PdfList",
    component: PdfList
  },
  {
    path: '/PdfUser',
    name: "PdfUser",
    component: PdfUser
  },
  {
    path: '/PdfDetail',
    name: "PdfDetail",
    component: PdfDetail
  },
  {
    path: '/Member',
    name: "Member",
    component: Member
  },
];
