<template>
  <div class="une-container">
    <div class="une-header">
      <van-nav-bar title="资料阅读" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="une-main">
      <div class="une-loading-table" v-if="loading">
        <van-loading color="#1989fa" class="une-loading-cell"/>
      </div>
      <pdf
        @click="scale"
        id="pdfPreview"
        ref="pdf"
        v-for="i in numPages"
        :key="i"
        :src="url"
        :page="i"
        @page-loaded="pageLoaded($event)"
      ></pdf>
    </div>
  </div>
</template>
<script>
    import pdf from 'vue-pdf'

    export default {
        components: {
            pdf
        },
        data() {
            return {
                loading: true,
                url: "",
                vip: "",
                numPages: null, // pdf 总页数
                read: {},
                vedioId: "",
                ismember: "",
            }
        },
        created () {
            console.log("dadada")
            if(this.$route.params && this.$route.params.pdfUrl) {
                console.log(this.$route.params)
                this.vedioId = this.$route.params.vedioId;
                this.vip = this.$route.params.vip;
                this.url = this.$route.params.pdfUrl;
                this.ismember = this.$route.params.ismember;
            }else {
                this.$router.go(-1)
            }

        },
        mounted() {
            this.getNumPages()
        },
        methods: {
            scale() {

            },
            pageLoaded(pageLoaded) {
              if(pageLoaded == this.numPages)  {
                  this.loading = false;
              }
            },
            onClickLeft() {
                if(this.vedioId != undefined) {
                    this.$router.push({ name: 'Vedio', params: { vedioId: this.vedioId }});
                } else {
                    this.$router.go(-1)
                }

            },
            getNumPages() {
                if(this.vip == "2" && this.ismember == 0) {
                    console.log(this.url)
                    let loadingTask = pdf.createLoadingTask(this.url)
                    loadingTask.promise.then(pdf => {
                        this.numPages = 2
                    }).catch(err => {
                        console.error('pdf 加载失败', err);
                    })
                    this.$dialog.confirm({
                        title: '开通会员',
                        message: '开通会员看完整文档',
                        confirmButtonText: '开通'
                    }).then(() => {
                        this.$router.push({ name: 'Member'});
                    }).catch(() => {
                    });
                } else {
                    let loadingTask = pdf.createLoadingTask(this.url)
                    loadingTask.promise.then(pdf => {
                        this.numPages = pdf.numPages
                    }).catch(err => {
                        this.$notify({ type: 'error', message: 'pdf 加载失败' });
                    })
                }

            },
        }
    }
</script>
<style lang="less" scoped>
  /deep/ .van-icon {
    color: #8294ae;
  }
  /deep/ .van-nav-bar__text {
    color: #8294ae;
  }
  .une-loading-table {
    position: absolute;
    display: table;
    width: 100%;
    height: 100%;
    z-index: 2000;
    background-color: white;
  }
  .une-loading-cell {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
</style>
