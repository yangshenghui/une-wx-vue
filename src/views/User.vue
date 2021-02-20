<template>
    <div class="une-container">
        <div class="une-main une-user">
            <div class="une-user-title" v-if="openid == '' || openid == 'undefined'">
                <div class="une-user-avatar" >
                  <img src="../../assets/images/user.png" alt="" >
                </div>
                <div class="une-user-name"><span>用户未登录</span></div>
            </div>
            <div class="une-user-title" v-if="openid != '' && openid != 'undefined'">
                <div class="une-user-avatar">
                  <img :src="customer.headimgurl" alt="">
                </div>
                <div class="une-user-name"><span>{{customer.nickname}}</span></div>
                <div class="une-user-member"><img src="../../assets/images/member.png" alt=""></div>
            </div>
            <div class="une-user-detail">
                <h2>我的信息</h2>
                <ul> 
                    <li>姓名：{{customer.nickname}}</li>
                    <li>性别: {{customer.sex == '1' ? '男' : '女'}}</li>
                    <li>出生年月: {{customer.birthday}}</li>
                    <li>手机号：{{customer.phone}}</li>
                    <li>邮箱：{{customer.email}}</li>
                    <li>我的会员：{{customer.member}}</li>
                </ul>
            </div>
            <div class="une-user-buy">
                <h2>浏览列表</h2>
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                  <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                  >
                    <div class="list-item" v-for="item in watchs" :key="item.id" >
                      <div class="une-vedio">
                          <div class="une-vedio-cover"><img :src="item.vedioImage" alt=""></div>
                          <div class="une-vedio-detail">
                              <div class="une-vedio-title"><span>{{item.vedioTitle}}</span></div>
                              <div class="une-vedio-progress"><span>观看{{item.gklog}}秒</span></div>
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
                <!-- <div class="une-menu-item menu-3"><router-link to="/list"></router-link></div> -->
                <div class="une-menu-item menu-4"><router-link to="/user"></router-link></div>
            </div>
        </div>
    </div>
</template>
<script>
import { getOpenid } from "../utils/utils";

export default {
  data() {
    return {
      watchs: [],
      loading: false,
      finished: false,
      refreshing: false,
      customer: {},
      limit: 0,
      openid: ''
    };
  },
  mounted() {
    this.openid = getOpenid()
    this.getCustomer();
  },
  methods: {
    async onLoad() {
      if (this.refreshing) {
        this.watchs = [];
        this.refreshing = false;
      }

      this.limit += 10;
      const watchs = await this.$api.reqWatchs(this.openid, this.limit)
      if(watchs.rows.length > 0) {
        this.watchs = watchs.rows;
      }

      console.log(watchs.rows.length)
       console.log(this.limit)


      this.loading = false;

      if (watchs.rows.length < this.limit) {
        this.finished = true;
      }
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    async getCustomer(){
      const res = await this.$api.reqCustomer(this.openid)
      this.customer = res
    },
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
        margin-bottom: 10PX;
    }
    .une-user-avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .une-user-name {
      font-size: 0.4rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.45rem;
      letter-spacing: 0.02rem;
      color: #010101;
      margin-left: 10Px;
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
