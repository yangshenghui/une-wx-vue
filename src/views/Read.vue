<template>
  <div class="collect_info">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <van-icon name="arrow-left" />
      </div>
      <div class="title">下载详情</div>
    </div>
    <div class="pdfIn" v-show="fileType === 'pdf'" ref="pdfView">
      <div>
        <pdf
          v-for="i in numPages"
          ref="pdfs"
          :src="src"
          :key="i"
          :page="i"
        >
        </pdf>
      </div>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import BScroll from 'better-scroll'
export default {
  metaInfo: {
    meta: [
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0, maximum-scale=2.0, user-scalable=yes' }
    ]
  },
  components: {pdf},
  data () {
    return {
      fileType: 'pdf', // 文件类型
      src: '', // pdf文件地址
      numPages: 0, // 总页数
      pdfScroll: null,
    }
  },
  computed: {
    pdfInfo () { // 路由携带的参数，包括pdf链接
      return this.$route.query.pdfInfo
    }
  },
  created () {
    // 有时PDF文件地址会出现跨域的情况,这里最好处理一下
    this.src = pdf.createLoadingTask("http://qmmb7uflf.hn-bkt.clouddn.com/pdf/SpringBoot%E5%90%AF%E5%8A%A8%E6%B5%81%E7%A8%8B%E8%A7%A3%E6%9E%90.pdf")
    this.src.promise.then(pdf => {
      this.numPages = pdf.numPages
    })
    this.init()
  },
  methods: {
    returnBack () {
      this.$router.push({name: 'myDownLoad'})
    },
    init () {
      this.$nextTick(() => {
        this.pdfScroll = new BScroll(this.$refs.pdfView, {
          click: true
        })
      })
    },
  }
}

</script>
<style scoped>
  .collect_info {
    height: 100%;
    display: flex;
    flex-direction: column;
    /*background: #f8f8f8;*/
    position: relative;
  }
  .score_header {
    text-align: center;
    letter-spacing: 0.2em;
    position: relative;
    font-size: 18px;
    width: 100%;
    background-color: rgb(0, 115, 231);
    color: #fff;
    height: 45px;
    line-height: 45px;
    flex: none;
    z-index: 1;
  }
  .return__icon{
    position: absolute;
    margin-left: 15px;
  }
  .iconfanhui {
    margin-top: 10px;
    font-size: 20px;
  }
  .pdfIn {
    height: calc(100% - 50px);
    /* overflow: hidden; */
  }
</style>
