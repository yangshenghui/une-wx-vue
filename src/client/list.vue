<template>
    <div class="une-container">
        <div class="une-header">
            <div class="une-back"><i class="el-icon-arrow-left"></i></div>
            <div class="une-buy-one"><span v-bind:class="{ buyActive:  buyOneActive }" @click="buyOne()">单次购买</span></div>
            <div class="une-buy-all"><span  v-bind:class="{ buyActive: buyAllActive }" @click="buyAll()">全套购买</span></div>
        </div>
        <div class="une-list">
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
        buyOneActive: true,
        buyAllActive: false,
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
      },
      buyOne() {
          this.buyOneActive = true;
          this.buyAllActive = false;
      },
      buyAll() {
          this.buyOneActive = false;
          this.buyAllActive = true;
      }

    }
  }
</script>
<style scoped>
    .une-header {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
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
    .une-buy-one {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .une-buy-all {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .une-buy-one .buyActive,
    .une-buy-all .buyActive {
        display: block;
        width: 60%;
        padding-bottom: 2px;
        border-bottom: 2px solid #40e0d0ba;
    }
    .une-list {
        width: 100%;
        height: 100%;
        margin-top: 50px;
        margin-bottom: 60px;
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
</style>>
