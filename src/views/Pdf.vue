<template>
    <div class="une-container">
        <div class="une-header">
            <van-nav-bar title="文档资料" left-text="返回" left-arrow @click-left="onClickLeft" />
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
    async onLoad() {
      if (this.refreshing) {
        console.log(this.refreshing)
        this.vedios = [];
        this.refreshing = false;
      }

      this.limit += 10;
      const vedios = await this.$api.reqReads(this.typeId, this.limit)
      if(vedios.rows.length > 0) {
        this.vedios = vedios.rows;
      }

      console.log(vedios.rows.length)
       console.log(this.limit)


      this.loading = false;

      if (vedios.rows.length < this.limit) {
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
