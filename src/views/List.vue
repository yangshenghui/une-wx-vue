<template>
    <div class="une-container">
        <div class="une-header">
            <van-icon name="arrow-left" size="0.65rem" color="#8294ae"/>
            <div class="une-buy">
            <div class="une-buy-one"><span v-bind:class="{ buyActive:  buyOneActive }" @click="buyOne()">单次购买</span></div>
            <div class="une-buy-all"><span  v-bind:class="{ buyActive: buyAllActive }" @click="buyAll()">全套购买</span></div>
            </div>
        </div>
        <div class="une-main">
          <div class="une-list">
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
        <!-- <div class="une-list">
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
        </div> -->
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
      buyOneActive: true,
      buyAllActive: false,
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
    },
    buyOne() {
      this.buyOneActive = true;
      this.buyAllActive = false;
    },
    buyAll() {
      this.buyOneActive = false;
      this.buyAllActive = true;
    }
  },
};
</script>
<style scoped>
    .une-header {
        height: 1.55rem;
        padding-left: 0.39rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid #dcdcdc;
    }
    .une-back {
        width: 0.36rem;
        height: 0.62rem;
        background-image: url(../../assets/images/left.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .une-buy {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
    }
    .une-buy-one,
    .une-buy-all {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .une-buy-one span,
    .une-buy-all span {
      font-size: 0.45rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.75rem;
      letter-spacing: 0.03rem;
      color: #8294ae;
    }

    .une-buy-one .buyActive,
    .une-buy-all .buyActive {
        padding-bottom: 2px;
        border-bottom: 2px solid #40e0d0ba;
    }
    .une-list {
      width: 100%;
    }
    .van-pull-refresh {
      width: 100%;
    }
    .une-vedio {
        display: flex;
        flex-direction: row;
        padding: 0.21rem;
        border-top: 1px solid #ccc;
    }
    .une-vedio:nth-last-child() {
        border-bottom: 1px solid #ccc;
    }
    .une-vedio-cover {
        width: 3.48rem;
	      height: 2rem;
    }
    .une-vedio-cover img{
        width: 100%;
        height: 100%;
    }
    .une-vedio-detail {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: baseline;
    }
    .une-vedio-title,
    .une-vedio-progress {
        font-size: 0.3rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0.75rem;
        letter-spacing: 0.02rem;
        color: #010101;
        padding-left: 0.29rem;
    }
</style>>
