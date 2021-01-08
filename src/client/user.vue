<template>
    <div class="une-container">
        <div class="une-user">
            <div class="une-user-title">
                <div class="une-user-avatar"><img src="../../assets/images/user.png" alt=""></div>
                <div class="une-user-name"><span>用户名称</span></div>
                <div class="une-user-member"><img src="../../assets/images/member.png" alt=""></div>
            </div>
            <div class="une-user-detail">
                <h2>我的信息</h2>
                <ul>
                    <li>姓名：</li>
                    <li>出生年月:</li>
                    <li>手机号：</li>
                    <li>邮箱：</li>
                    <li>我的会员：</li>
                </ul>
            </div>
            <div class="une-user-buy">
                <h2>已购列表</h2>
                <div class="infinite-list-wrapper" style="overflow:auto">
                    <ul
                    class="list"
                    v-infinite-scroll="load"
                    infinite-scroll-disabled="disabled">
                    <li v-for="i in count" :key=i class="list-item">
                        <div class="une-vedio">
                            <div class="une-vedio-cover"><img src="../../assets/images/vedio-cover.jpeg" alt=""></div>
                            <div class="une-vedio-detail">
                                <div class="une-vedio-title"><span>视频名称{{i}}</span></div>
                                <div class="une-vedio-progress"><span>观看进度%</span></div>
                            </div>
                        </div>
                    </li>
                    </ul>
                    <p v-if="loading">加载中...</p>
                    <p v-if="noMore">没有更多了</p>
                </div>
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
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
  }
</script>
<style scoped>
    .une-user {
        width: 100%;
        background-color: #ccc;
        padding-top: 60px;
    }
    .une-user-title {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding-left: 20px;
        padding-bottom: 20px;
    }
    .une-user-avatar {
        width: 100px;
        height: 100px;
    }
    .une-user-avatar img {
        width: 100%;
        height: 100%;
    }
    .une-user-name {
       color: #555; 
    }
    .une-user-member {
        width: 50px;
        height: 50px;
    }
    .une-user-member img {
        width: 100%;
        height: 100%;
    }
    .une-user-detail {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: baseline;
        border-bottom: 50px solid blueviolet;
    }
    .une-user-detail h2 {
        line-height: 40px;
        height: 40px;
        border-left: 10px solid blueviolet;
        font-size: 18px;
        padding-left: 20px;
    }
    .une-user-detail ul{
        padding-left: 30px;
        padding-top: 20px;
    }
    .une-user-detail ul li {
        font-size: 16px;
        line-height: 40px;
        text-align: left;
    }
    .une-user-buy  {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: baseline;
        padding-top: 20px;
        margin-bottom: 70px;
        background-color: white;
    }
    .une-user-buy h2 {
        line-height: 40px;
        height: 40px;
        border-left: 10px solid blueviolet;
        font-size: 18px;
        padding-left: 20px;
        margin-bottom: 20px;
    }
    .une-vedio {
        display: flex;
        flex-direction: row;
        padding: 10px;
        border-top: 1px solid #ccc;
    }
    .une-vedio:nth-last-child() {
        border-bottom: 1px solid #ccc;
    }
    .une-vedio-cover {
        flex: 1;
    }
    .une-vedio-cover img{
        width: 100%;
        height: 100%;
    }
    .une-vedio-detail {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: baseline;
    }
    .une-vedio-title,
    .une-vedio-progress {
        padding: 10px 15px;
    }
</style>