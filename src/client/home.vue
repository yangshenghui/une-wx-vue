<template>
  <div class="une-container">  
    <div class="une-header">
        <img src="../../assets/images/logo.png" alt="UULTRA NEWENERGY">
    </div>
    <div class="une-main">
      <div class="une-tool">
        <div class="une-search">
        </div>
        <!-- <div class="une-login">
          <a href="javascript:void(0);">登陆/注册</a>
        </div> -->
      </div>
      <div class="une-carousel">
        <el-carousel height="150px" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small"><img src="../../assets/images/carousel-vedio.jpg" alt="une-carousel"></h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="une-tabs">
        <el-tabs>
          <el-tab-pane key="0" label="精选" name="精选"></el-tab-pane>
          <el-tab-pane key="1" label="分类一" name="分类一"></el-tab-pane>
          <el-tab-pane key="2" label="分类二" name="分类二"></el-tab-pane>
          <el-tab-pane key="3" label="分类三" name="分类三"></el-tab-pane>
          <el-tab-pane key="4" label="分类四" name="分类四"></el-tab-pane>
          <el-tab-pane key="5" label="分类五" name="分类五"></el-tab-pane>
          <el-tab-pane key="6" label="分类六" name="分类六"></el-tab-pane>
          <el-tab-pane key="7" label="分类七" name="分类七"></el-tab-pane>
          <el-tab-pane key="8" label="分类八" name="分类八"></el-tab-pane>
          <el-tab-pane key="9" label="分类九" name="分类九"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="une-vedios">
        <div class="une-vedio-item">
          <div class="une-cover">
            <img src="../../assets/images/vedio-cover.jpeg" alt="vedio-cover">
            <span>视频名称简介</span>
          </div>
        </div>
        <div class="une-vedio-item">
          <div class="une-cover">
            <img src="../../assets/images/vedio-cover.jpeg" alt="vedio-cover">
            <span>视频名称简介</span>
          </div>
        </div><div class="une-vedio-item">
          <div class="une-cover">
            <img src="../../assets/images/vedio-cover.jpeg" alt="vedio-cover">
            <span>视频名称简介</span>
          </div>
        </div><div class="une-vedio-item">
          <div class="une-cover">
            <img src="../../assets/images/vedio-cover.jpeg" alt="vedio-cover">
            <span>视频名称简介</span>
          </div>
        </div><div class="une-vedio-item">
          <div class="une-cover">
            <img src="../../assets/images/vedio-cover.jpeg" alt="vedio-cover">
            <span>视频名称简介</span>
          </div>
        </div>
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
<style scoped>
.une-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.une-header {
  height: 66px;
    padding: 0px 15px;
    z-index: 2000;
}
.une-header img{
  height: 100%;
  width: 100%;
}
.une-main {
  margin-bottom: 60px;
}
.une-tool {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.une-search {
  flex: 1;
  background-image: url(../../assets/images/search.png);
  background-size: cover;
}
.une-login {
  width: 20%;
  align-items: center;
  display: flex;
}

.une-tabs {
  margin-top: 10px;
  padding: 0 10px;
}

.une-vedios {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
}
.une-vedio-item {
  width: 50%;
}
.une-cover:nth-child(odd)
{
  padding-left: 5px;
}
.une-cover:nth-child(even)
{
  padding-right: 5px;
}
.une-cover img{
  width: 100%;
  height: 100%;
}
.une-cover span{
  display: block;
  padding: 10px;
  font-size: 14px;
}


</style>