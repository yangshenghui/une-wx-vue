<template>
  <div id="app">
    <transition name="router-fade" mode="out-in" v-show="isPortrait">
      <div style="height:100%;">
        <router-view />
      </div>
    </transition>
  </div>
</template>

<script>
import { getOpenid, setOpenid, setStore, getStore } from "./utils/utils";
export default {
  data() {
    return {
      isPortrait: true //是否竖屏
    };
  },
  mounted() {
    //setOpenid("obsHk566qXPooTLNhgHfFC-0bQZ4"); //测试环境先授权，发布时删除

    // 移动端的浏览器一般都支持window.orientation这个参数，通过这个参数可以判断出手机是处在横屏还是竖屏状态。
    window.addEventListener(
      "onorientationchange" in window ? "orientationchange" : "resize",
      () => {
        if (window.orientation === 180 || window.orientation === 0) {
          //竖屏状态
          console.log("竖屏");
          this.isPortrait = true;
        }
        if (window.orientation === 90 || window.orientation === -90) {
          //横屏状态
          console.log("横屏");
          this.isPortrait = false;
        }
      },
      false
    );
  },
  watch: {
    $route: function(to, from, value) {
      // <---------------------------微信授权逻辑------------------------------->
      let openId = getOpenid();
      if (!openId && window.location.hash.indexOf("oauth") == -1) {
        setStore("BtargetUrl", to.path);
        if (window.location.search.indexOf("?") == -1) {
          this.$router.replace(`/oauth`);
        } else {
          this.$router.replace(`/oauth${window.location.search}`);
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
#app {
  // 字体抗锯齿渲染
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // 移动端字体设置
  font-family: Helvetica;
  background: #fafafa;
  font-size: 0.35rem;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
  color: #313131;
  .tip {
    background: #666;
    color: #fff;
    height: 100%;
    text-align: center;
    line-height: 16;
  }
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
