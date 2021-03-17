<template>
    <div class="une-container">
        <div class="une-header">
            <van-nav-bar title="视频点播" left-text="返回" left-arrow @click-left="onClickLeft" />
        </div>
        <div class='une-main'>
        <div class="une-vedio">
            <div class="une-vedio-play">
                <video-player  class="video-player vjs-custom-skin"
                                ref="videoPlayer"
                                :playsinline="true"
                                :options="playerOptions"
                                @ready="playerReadied"
                                @timeupdate = "onPlayerTimeupdate($event)"
                            ></video-player>
            </div>
            <!-- <div class="une-vedio-operate">
                <div class="une-button"><span>单次购买</span></div>
                <div class="une-button"><span>全套购买</span></div>
            </div> -->
        </div>
        <div class="une-vedio-info">
            <h2>视频介绍
              <van-button size="small"  style="float: right;margin-right: 23px;" color="#8294ae" round type="info" @click.stop="toRead(vedio.url)">资料阅读</van-button>
            </h2>
            <div class="une-vedio-desc">
                <!-- <h6>简介</h6> -->
                <span>
                  <quill-editor v-model="vedio.summary" ref="myQuillEditor" :options="editorOption"
                    @focus="onEditorFocus($event)"></quill-editor>
                </span>
            </div>
        </div>
        </div>
        <!-- <div class="une-footer">
            <div class="une-menus">
                <div class="une-menu-item menu-1"><router-link to="/home"></router-link></div>
                <div class="une-menu-item menu-2"><router-link to="/vedio"></router-link></div>
                <div class="une-menu-item menu-3"><router-link to="/list"></router-link></div>
                <div class="une-menu-item menu-4"><router-link to="/user"></router-link></div>
            </div>
        </div> -->
    </div>
</template>
<script>
    import { getOpenid } from "../utils/utils";

    export default {
        data () {
            return {
                myPlayer: null,
                playerOptions : {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                    src: '',  // 路径
                    type: 'video/mp4'  // 类型
                    }],
                    poster: "", //你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: true,
                    fullscreenToggle: true  //全屏按钮
                    }
                },
                vedio: {},
                editorOption: {
                  modules:{
                      toolbar:[]
                  }
                },
                gklog: '',
                openid: '',
                vedioId: ''

            }
        },
        mounted() {
          this.openid = getOpenid()
          console.log(this.$route.params)
          if(this.$route.params && this.$route.params.vedioId) {
            this.vedioId = this.$route.params.vedioId
            this.gklog = this.$route.params.gklog
            this.getVedio(this.vedioId)
          }else {
            this.$router.push({name: 'Home'})
          }

          this.initVideo()
        },
        methods: {
          async getVedio(id){
            const res = await this.$api.reqVedioById(id)
            console.log("res")
            console.log(res)
            this.playerOptions.sources[0].src = res.url
            this.playerOptions.poster = res.image
            this.vedio = res
          },
          async saveGklog(){
            //const res = await this.$api.reqGklog("oNv5N6cnocEjUaFl33pGoRGSxzHs", this.vedioId, this.gklog)
            console.log("this.opeid" + this.opeid)
            console.log("this.opeid" + this.gklog)
            if(this.openid && this.gklog > 0) {
              const res = await this.$api.reqGklog(this.openid, this.vedioId, this.gklog)
            }
          },
          onClickLeft() {
            this.$router.go(-1);
          },
          initVideo: function () {
            // const player = this.$refs.videoPlayer.player;
            // 配置横屏插件
            // player.landscapeFullscreen({
            //       fullscreen: {
            //           enterOnRotate: true, //在横向旋转设备时进入全屏模式
            //           alwaysInLandscapeMode: true, //即使设备处于纵向模式，也始终以横向模式进入全屏（适用于 chromium、firefox 和 ie>=11）
            //           iOS: true // 是否在 iOS 上使用假全屏（显示播放器控件而不是系统控件所需）
            //           }
            //         });
          },
          playerReadied (player) {
            this.myPlayer = player
            player.currentTime(this.gklog)
          },
          onPlayerTimeupdate (player) {
              this.gklog = player.cache_.currentTime
              this.saveGklog()
              // if(this.gklog > 3) {
              //     player.currentTime(0)
              //     player.pause()
              // }
          },
          download() {
            console.log(this.vedio.pdfurl)
            window.location.href = this.vedio.pdfurl
          },
          toRead(pdfUrl) {
            this.$router.push({ name: 'Pdf2', params: { pdfInfo: pdfUrl }});
          },
          onEditorFocus(event) {
              event.enable(false);
          }


        }
    }
</script>
<style>
.van-nav-bar {
  height: 1.55rem;
}
.van-nav-bar .van-icon,
.van-nav-bar__text {
  color: #8294ae;
}
.van-nav-bar__title {
  font-size: 0.45rem;
	color: #8294ae;
}
.video-js.vjs-fluid {
  height: 6.66rem;
}
.vjs-big-play-button {
  width: 1.6em!important;
  height: 1.6em!important;
  position: absolute!important;
  left: 50%!important;
  top: 50%!important;
  margin-top: -0.8em!important;
  margin-left: -.8em!important;
  text-align: center!important;
  border-radius: 50%!important;
}
.ql-toolbar.ql-snow,
.ql-container.ql-snow {
  border: none;
}
.ql-toolbar.ql-snow {
  height: 0;
}
</style>
<style scoped>
.une-header {
  height: 1.55rem
}
.une-vedio {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.une-vedio-play {
  height: 6.66rem;
}
.une-vedio-operate {
  height: 1.65rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #000000;
}
.une-vedio-operate .une-button {
  width: 3.32rem;
  height: 0.98rem;
  margin: 0.5rem;
}
.une-vedio-operate .une-button span {
  display: block;
  border: 1px solid orange;
  padding: 5px 15px;
  border-radius: 8px;
  color: orange;
  text-align: center;

}
.une-vedio-info {
  min-height: 2.79rem;
  margin-top: 0.23rem;
  border-bottom: 0.75rem solid #8294ae;
}
.une-vedio-info h2 {
  line-height: 1.24rem;
  height: 1.24rem;
  border-left: 0.34rem solid #8294ae;
  font-size: 0.45rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.03rem;
  color: #8294ae;
  padding-left: 0.17rem;
}
.une-vedio-desc {
  display: flex;
  flex-direction: column;
  justify-self: left;
  align-items: center;
  /* padding-left: 0.52rem; */
}
.une-vedio-desc h6 {
  font-size: 0.4rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.53rem;
  letter-spacing: 0.03rem;
  color: #020202;
}
.une-vedio-desc span {
  font-size: 0.35rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.35rem;
  letter-spacing: 0.03rem;
  color: #020202;
}
</style>
