<template>
  <div class="une-container">
    <div class="une-header">
      <van-nav-bar title="资料阅读" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="une-main">
      <div class="une-loading-table" v-if="loading">
        <van-loading color="#1989fa" class="une-loading-cell"/>
      </div>
      <div id="demo"></div>
    </div>
  </div>
</template>
<script>
    import Pdfh5 from "pdfh5";
    import "pdfh5/css/pdfh5.css";
    export default {
        name: 'pdfH5',
        data() {
            return {
                pdfh5: null,
                loading: true,
                vedioId: "",
                url: "",
                vip: "",
                ismember: "",
            };
        },
        created () {
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
            //实例化
            this.pdfh5 = new Pdfh5("#demo", {
                pdfurl: "http://cdn.unechannel.com/SpringBoot%E5%90%AF%E5%8A%A8%E6%B5%81%E7%A8%8B%E8%A7%A3%E6%9E%90.pdf"
            });
            //监听完成事件
            this.pdfh5.on("complete", (status, msg, time) => {
                console.log("状态：" + status + "，信息：" + msg + "，耗时：" + time + "毫秒，总页数：" + this.totalNum)
                this.loading = false;
                if(this.vip == "2" && this.ismember == 0) {
                    this.pdfh5.scrollEnable(false)
                    this.$dialog.confirm({
                        title: '开通会员',
                        message: '开通会员看完整文档',
                        confirmButtonText: '开通'
                    }).then(() => {
                        this.$router.push({ name: 'Member'});
                    }).catch(() => {
                    });
                }

            })
        },
        methods:{
            onClickLeft() {
                if(this.vedioId != undefined) {
                    this.$router.push({ name: 'Vedio', params: { vedioId: this.vedioId }});
                } else {
                    this.$router.go(-1)
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

  *{
    padding: 0;
    margin: 0;
  }
  html,body {
    width: 100%;
    height: 100%;
  }
  .pdf{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    overflow: hidden;
    z-index: 200;
  }
  .iconContain{
    position: fixed;
    top: .426667rem;
    right: .426667rem;
    width: .64rem;
    height: .64rem;
    line-height: .64rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.4);
    z-index: 200;
    border-radius: 50%;
  }
  .iconClose{
    display: block;
    color:#fff;
  }
</style>
