<template>
    <div class="une-container">
        <div class="une-main une-user">
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
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                  <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                  >
                    <div class="list-item" v-for="item in list" :key="item" >
                      <div class="une-vedio">
                          <div class="une-vedio-cover"><img src="../../assets/images/vedio-cover.jpeg" alt=""></div>
                          <div class="une-vedio-detail">
                              <div class="une-vedio-title"><span>视频名称{{i}}</span></div>
                              <div class="une-vedio-progress"><span>观看进度%</span></div>
                          </div>
                      </div>
                  </div>
                  </van-list>
                </van-pull-refresh>
            </div>
        </div>
        <div class="une-footer">
            <div class="une-menus">
                <div class="une-menu-item menu-1"><router-link to="/home"></router-link></div>
                <!-- <div class="une-menu-item menu-2"><router-link to="/vedio"></router-link></div> -->
                <div class="une-menu-item menu-3"><router-link to="/list"></router-link></div>
                <div class="une-menu-item menu-4"><router-link to="/user"></router-link></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  },
};
</script>
<style scoped>
    .une-user {
        width: 100%;
        background-color: #dcdcdc;
    }
    .une-user-title {
        height: 1.73rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 0.95rem;
        margin-left: 0.56rem;
        margin-bottom: 0.46px;
    }
    .une-user-avatar {
        width: 1.73rem;
        height: 1.73rem;
    }
    .une-user-avatar img {
        width: 100%;
        height: 100%;
    }
    .une-user-name {
      font-size: 0.4rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.45rem;
      letter-spacing: 0.02rem;
      color: #010101;
    }
    .une-user-member {
      width: 1.5rem;
      height: 1.5rem;
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
        border-bottom: 0.89rem solid #8294ae;
        padding-bottom: 1rem;
    }
    .une-user-detail h2 {
        height: 0.95rem;
        line-height: 0.95rem;
        border-left: 0.34rem solid #8294ae;
        font-size: 0.4rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0.02rem;
        color: #8294ae;
        padding-left: 0.27rem;
    }
    .une-user-detail ul{
        padding-left: 0.6rem;
        padding-top: 0.2rem;
    }
    .une-user-detail ul li {
        font-size: 0.32rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0.75rem;
        letter-spacing: 0.02rem;
        color: #010101;
    }
    .une-user-buy  {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: baseline;
        padding-top: 0.83rem;
        background-color: white;
    }
    .une-user-buy h2 {
        height: 0.95rem;
        line-height: 0.95rem;
        border-left: 0.34rem solid #8294ae;
        font-size: 0.4rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0.02rem;
        color: #8294ae;
        padding-left: 0.27rem;
    }
    .une-vedio {
        display: flex;
        flex-direction: row;
        padding: 10px;
        border-bottom: 1px solid #ccc;
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
