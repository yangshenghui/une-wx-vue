<template>
	<div class="une-container">
    <div class="une-main">
		<div class="tools">
			<div class="pre" @click.stop="prePage"> 上一页</div>
      <div class="page">{{pageNum}}/{{pageTotalNum}} </div>
			<div class="next" @click.stop="nextPage"> 下一页</div>
		</div>
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
      <div class="une-menus">
          <div class="une-menu-item menu-1"><router-link to="/pdf"></router-link></div>
          <div class="une-menu-item menu-4"><router-link to="/users"></router-link></div>
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
				url: "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
				pageNum: 1,
				pageTotalNum: 1,
				pageRotate: 0,
				// 加载进度
				loadedRatio: 0,
				curPageNum: 0,
			}
		},
		mounted: function() {},
		methods: {
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
