<template>
    <div class="une-container">
        <div class="une-header">
            <div class="une-back"><i class="el-icon-arrow-left"></i></div>
        </div>
        <div class="une-vedio">
            <div class="une-vedio-play">
                <video-player  class="video-player vjs-custom-skin"
                                ref="videoPlayer"
                                :playsinline="true"
                                :options="playerOptions"
                            ></video-player>
            </div>
            <div class="une-vedio-operate">
                <div class="une-button"><span>单次购买</span></div>
                <div class="une-button"><span>全套购买</span></div>
            </div>
        </div>
        <div class="une-vedio-info">
            <h2>已购列表</h2>
            <div class="une-vedio-desc">
                <h6>简介</h6>
                <span>大大大苏打大大大苏打</span>
            </div>
        </div>
        <div class="une-footer">
            <div class="une-menus">
                <div class="une-menu-item menu-1"><router-link to="/home"></router-link></div>
                <div class="une-menu-item menu-2"><router-link to="/vedio"></router-link></div>
                <div class="une-menu-item menu-3"><router-link to="/list"></router-link></div>
                <div class="une-menu-item menu-4"><router-link to="/user"></router-link></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
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
                    src: 'http://sven-it.com/vedio/video1.mp4',  // 路径
                    type: 'video/mp4'  // 类型
                    }],
                    poster: "http://sven-it.com/vedio/vedio-cover.jpeg", //你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true  //全屏按钮
                    }
                }
            }
        },
    }
</script>
<style>
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
</style>
<style>
    .une-header {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
    .une-back {
        width: 50px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .une-vedio {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 50px;
    }
    .une-vedio-play {
        width: 100%;
    }
    .une-vedio-operate {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 50px;
        background: black;
    }
    .une-vedio-operate .une-button {
        flex: 1;
    }
    .une-vedio-operate .une-button span {
        border: 1px solid orange;
        padding: 5px 15px;
        border-radius: 8px;
        color: orange;
        
    }
    .une-vedio-info {
        margin-top: 10px;
        padding-bottom: 30px;
        border-bottom: 50px solid blueviolet;
    }
    .une-vedio-info h2 {
        line-height: 40px;
        height: 40px;
        border-left: 10px solid blueviolet;
        font-size: 18px;
        padding-left: 20px;
        text-align: left
    }
    .une-vedio-desc {
        display: flex;
        flex-direction: column;
        justify-self: left;
    }
    .une-vedio-desc h6 {
        font-size: 16px;
        line-height: 40px;
        text-align: left;
        padding-left: 30px;
    }
    .une-vedio-desc span {
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        padding-left: 30px;
    }
</style>
