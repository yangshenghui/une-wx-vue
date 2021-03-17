<template>
    <div class="une-container">
        <div class="score_header">
          <div class="title">文档资料</div>
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
                <div class="list-item" v-for="item in reads" :key="item.id" >
                  <div class="une-read">
                      <div class="une-read-detail">
                          <div class="une-read-title"><span>{{item.name}}</span></div>

                      </div>
                      <van-button size="small" color="#8294ae" round type="info" @click.stop="toRead(item.url)">阅读</van-button>
                  </div>
              </div>
              </van-list>
            </van-pull-refresh>
          </div>

        </div>
        <div class="une-footer">
            <div class="une-menus">
                <div class="une-menu-item menu-1"><router-link to="/pdf"></router-link></div>
                <div class="une-menu-item menu-4"><router-link to="/users"></router-link></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      reads: [],
      loading: false,
      finished: false,
      refreshing: false,
      limit: 0,
      downloadLink: ''
    };
  },
  methods: {
    download(data) {
      window.location.href = data
    },
    async onLoad() {
      if (this.refreshing) {
        this.reads = [];
        this.refreshing = false;
      }

      this.limit += 10;
      const reads = await this.$api.reqReads(this.limit)
      console.log(reads)
      if(reads.rows.length > 0) {
        this.reads = reads.rows;
      }

      this.loading = false;

      if (reads.rows.length < this.limit) {
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
    toRead(pdfUrl) {
      this.$router.push({ name: 'Pdf1', params: { pdfInfo: pdfUrl }});
    }
  },
};
</script>
<style scoped>
    .score_header {
      text-align: center;
      letter-spacing: 0.2em;
      position: relative;
      font-size: 18px;
      width: 100%;
      background-color: #8294ae;
      color: #fff;
      height: 45px;
      line-height: 45px;
      flex: none;
      z-index: 1;
    }
    .une-list {
      width: 100%;
    }
    .van-pull-refresh {
      width: 100%;
    }
    .une-read {
        display: flex;
        flex-direction: row;
        padding: 0.21rem;
        border-top: 1px solid #ccc;
    }
    .une-read:nth-last-child() {
        border-bottom: 1px solid #ccc;
    }
    .une-read-cover {
        width: 3.48rem;
	      height: 2rem;
    }
    .une-read-cover img{
        width: 100%;
        height: 100%;
    }
    .une-read-detail {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: baseline;
    }
    .une-read-title,
    .une-read-progress {
        font-size: 0.3rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0.75rem;
        letter-spacing: 0.02rem;
        color: #010101;
        padding-left: 0.29rem;
    }
</style>>
