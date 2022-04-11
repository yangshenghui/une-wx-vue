<template>
  <div class="une-container">
    <div class="une-header">
      <van-nav-bar title="资料阅读" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="une-main">
      <pdf
        ref="pdf"
        v-for="i in numPages"
        :key="i"
        :src="url"
        :page="i"
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
                url: "",
                vip: "",
                numPages: null, // pdf 总页数
                read: {},
                vedioId: "",
                ismember: "",
            }
        },
        created () {
            if(this.$route.params && this.$route.params.pdfId) {
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

            onClickLeft() {
                console.log(this.vedioId)
                if(this.vedioId != undefined) {
                    this.$router.push({ name: 'Vedio', params: { vedioId: this.vedioId }});
                } else {
                    this.$router.go(-1)
                }

            },
            getNumPages() {
                console.log("getNumPages")
                console.log("this.vip" + this.vip)
                console.log("this.ismember" + this.ismember)
                if(this.vip == "2" && this.ismember == 0) {
                    console.log(this.url)
                    let loadingTask = pdf.createLoadingTask(this.url)
                    loadingTask.promise.then(pdf => {
                        this.numPages = 2
                    }).catch(err => {
                    }).catch(err => {
                        console.error('pdf 加载失败', err);
                    })
                    this.$dialog.confirm({
                        title: '开通会员',
                        message: '开通会员看完整文档',
                        confirmButtonText: '开通'
                    })
                        .then(() => {
                            this.$router.push({ name: 'Member', params: {vedioId: this.vedioId}});
                        })
                        .catch(() => {

                        });
                } else {
                    let loadingTask = pdf.createLoadingTask(this.url)
                    loadingTask.promise.then(pdf => {
                        this.numPages = pdf.numPages
                    }).catch(err => {
                    }).catch(err => {
                        console.error('pdf 加载失败', err);
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
</style>
