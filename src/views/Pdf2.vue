<template>
	<div class="une-container">
    <div class="une-header">
        <van-nav-bar title="资料阅读" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="une-main">

		<pdf ref="pdf"
		:src="url"
		:page="pageNum"
		:rotate="pageRotate"
		@progress="loadedRatio = $event"
		@page-loaded="pageLoaded($event)"
		@num-pages="pageTotalNum=$event"
		@error="pdfError($event)"
		@link-clicked="page = $event">
		</pdf>
    </div>
    <div class="une-footer">
      <div class="tools">
        <div class="pre" @click.stop="prePage"> 上一页</div>
        <div class="page">{{pageNum}}/{{pageTotalNum}} </div>
        <div class="next" @click.stop="nextPage"> 下一页</div>
      </div>
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
				pageNum: 1,
				pageTotalNum: 1,
				pageRotate: 0,
				// 加载进度
				loadedRatio: 0,
				curPageNum: 0,
			}
		},
    created () {
      console.log(this.$route.params)
      if(this.$route.params && this.$route.params.pdfInfo) {
        console.log("dsad")
        console.log(this.$route.params.pdfInfo)
        this.url = this.$route.params.pdfInfo;
      }else {
         this.$router.go(-1)
      }
    },
		methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
            // 上一页函数，
			prePage() {
				var page = this.pageNum
				page = page > 1 ? page - 1 : this.pageTotalNum
				this.pageNum = page
			},
            // 下一页函数
			nextPage() {
				var page = this.pageNum
				page = page < this.pageTotalNum ? page + 1 : 1
				this.pageNum = page
			},
            // 页面顺时针翻转90度。
			clock() {
				this.pageRotate += 90
			},
            // 页面逆时针翻转90度。
			counterClock() {
				this.pageRotate -= 90
			},
            // 页面加载回调函数，其中e为当前页数
			pageLoaded(e) {
				this.curPageNum = e
			},
            // 其他的一些回调函数。
			pdfError(error) {
				console.error(error)
			},
		}
	}
</script>
<style scoped>
 .tools {
    display: flex;
    flex-direction: unset;
    background-color: #8294ae;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #ccc;
 }
 .page {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
 }
 .pre, .next, .page {
   flex: 1;
 }
</style>
