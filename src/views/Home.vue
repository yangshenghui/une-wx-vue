<template>
  <div class="une-container">
    <div class="une-header">
        <div class="une-logo">
          <img src="http://qmmb7uflf.hn-bkt.clouddn.com/image/logo.png" alt="UULTRA  ">
        </div>
        <!-- <div class="une-search">
          <van-search v-model="searchVal" shape="round"  placeholder="请输入搜索关键词"/>
        </div> -->
    </div>
    <div class="une-main">
      <div class="une-carousel">
        <van-swipe class="une-swipe":autoplay="3000">
          <van-swipe-item v-for="(swipe, index) in swipes" :key="index" @click="toSwipe(swipe.url)">
            <img v-lazy="swipe.image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="une-tabs">
        <van-tabs :sticky="true" animated :swipeable="true" @change="tabChange">
          <van-tab v-for="(tab, index) in tabs" :key="tab.id"  :name="tab.id" :title="tab.name">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <div class="list-item" >
                  <div class="une-vedios">
                    <div class="une-vedio-item" v-for="vedio in vedios" :key="vedio.id" @click="toVedio(vedio.id)" >
                      <div class="une-cover">
                        <img :src="vedio.image" alt="vedio-cover">
                      </div>
                      <div class="une-desc">
                        <span>{{vedio.title}}</span>
                        <span v-if="vedio.price == 0">免费</span>
                        <span v-if="vedio.price != 0">收费</span>
                      </div>
                    </div>
                  </div>
              </div>
              </van-list>
            </van-pull-refresh>
          </van-tab>
        </van-tabs>
      </div>

    </div>
    <div class="une-footer">
        <div class="une-menus">
            <div class="une-menu-item menu-1"><router-link to="/home"></router-link></div>
            <!-- <div class="une-menu-item menu-2"><router-link to="/vedio"></router-link></div> -->
            <div class="une-menu-item menu-3"><router-link to="/read"></router-link></div>
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
      searchVal: '',
      images: [
      ],
      tabs: [],
      swipes: [],
      vedios: [],
      loading: false,
      finished: false,
      refreshing: false,
      typeId: '',
      limit: 0,
    };
  },
  mounted() {
    this.getTypes();
    this.getSwipes();
  },
  methods: {
    async onLoad() {
      if (this.refreshing) {
        console.log(this.refreshing)
        this.vedios = [];
        this.refreshing = false;
      }

      this.limit += 10;
      const vedios = await this.$api.reqVediosByTypeId(this.typeId, this.limit)
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
    },
    async getTypes(){
      const types = await this.$api.reqTypes()
      console.log(types.rows)
      this.tabs = types.rows
      console.log(types.rows[0].id)
      this.typeId = types.rows[0].id
    },
    async getSwipes(){
      const swipes = await this.$api.reqSwipes()
      console.log(swipes)
      this.swipes = swipes
    },
    tabChange(name) {
      console.log("tabChange")
      this.typeId = name
      this.offerset = 0
      this.refreshing = true
      this.onRefresh()
    },
    toVedio(vedioId) {
      console.log(vedioId)
      this.$router.push({ name: 'Vedio', params: { vedioId: vedioId }});
    },
    toSwipe(url) {
      window.location.href= url
    }
  }
};
</script>
<style>
/* .van-sticky--fixed {
  top: 1.82rem;
} */
.van-tabs--line .van-tabs__wrap {
  height: 1.08rem !important;
  line-height: 1.08rem !important;;
}
.van-tabs__line {
  background-color:#8294ae;
}
.van-search {
  padding: 0;
  background-color: rgb(0 0 0 / 0%);
}
</style>
<style scoped>
.une-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 1.55rem;
  padding: 0.22rem 1.47rem; */
}
.une-logo {
  width: 7.07rem;
  height: 0.92rem;
  margin: 0.22rem 0 0.4rem 0;
}
.une-logo img {
  height: auto;
  width: 100%;
}
.une-search {
  width: 6.72rem;
  height: 0.91rem;
}
.une-carousel {
  width: 100%;
  height: 4.12rem;
  margin-top: 0.38rem;
}

.une-swipe {
  width: 100%;
  height: 100%;
}
.une-swipe .van-swipe-item {
  width: 100%;
  height: 100%;
}
.van-swipe-item img {
  width: 100%;
	height: 4.12rem;
}

.une-tabs {
  height: 1.08rem;
  line-height: 1.08rem;
  margin: 0.24rem 0;
  border-left:  0.3rem solid #8294ae;
}

.une-vedios {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  margin-left: -0.4rem;
  margin-top: 10Px;
}
.une-vedio-item {
  width: 4.73rem;
  height: 3.91rem;
}
.une-vedio-item:nth-child(odd){
  padding-left: 0.11rem;
  padding-right: 0.16rem;
}
.une-vedio-item:nth-child(even){
  padding-left: 0.16rem;
  padding-right: 0.11rem;
}

.une-vedio-item .une-cover {
  width: 4.73rem;
  height: 2.71rem;
}
.une-cover img{
  width: 100%;
  height: 100%;
}
.une-desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.2rem;;
}
.une-desc span{
	font-size: 0.24rem;
	font-weight: normal;
	font-stretch: normal;
	line-height: 0.45rem;
	letter-spacing: 0.01rem;
	color: #010101;
}
</style>
