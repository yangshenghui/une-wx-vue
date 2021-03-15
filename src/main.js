import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'//基础样式
import './styles/iconfont.css'
import './styles/vanui.less'
import "./utils/rem";//rem
import api from './api'
import FastClick from "fastclick";
import { Button, Loading,Toast,Swipe, SwipeItem, Lazyload,Tab, Tabs, Search, NavBar, Icon, PullRefresh,List, Notify} from 'vant';//vant组件按需引入
Vue.use(api);

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
Vue.use(VueVideoPlayer)


import '../assets/css/une.css'

import './utils/wxapi' //通过config接口注入权限验证配置

import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, {})

Vue.use(Button);
Vue.use(Loading);
Vue.use(Toast);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Search);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Notify);

Vue.config.productionTip = false;

// FastClick 处理移动端click事件300毫秒延迟。
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      FastClick.attach(document.body);
    },
    false
  );
}
//在iOS下是通过targetElement.setSelectionRange来定位位置，至于在iOS11.3下为什么会出现这个bug，仍未知，解决的方法简单暴力，直接改写此方法
FastClick.prototype.focus = function(targetElement) {
  targetElement.focus();
};

let vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export default vue
