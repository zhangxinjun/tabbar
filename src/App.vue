
<template>
  <div id="app">
    <tabBar>
      <tabbarItem>
        <!-- 使用具名插槽，插入对应的内容 -->
        <img slot="tabbar-icon" src="./assets/img/4G1_01.png" alt />
        <div slot="tabbar-text">首页</div>
      </tabbarItem>
       <tabbarItem>
        <img slot="tabbar-icon" src="./assets/img/4Gkuandai_07.jpg" alt />
        <div slot="tabbar-text">详情</div>
      </tabbarItem>
       <tabbarItem>
        <img slot="tabbar-icon" src="./assets/img/4Gkuandai_14.jpg" alt />
        <div slot="tabbar-text">购物车</div>
      </tabbarItem>
       <tabbarItem>
        <img slot="tabbar-icon" src="./assets/img/4Gkuandai_17.jpg" alt />
        <div slot="tabbar-text">我的</div>
      </tabbarItem>

    </tabBar>
  </div>
</template>

<script>
import tabBar from "./component/tabbar/tabBar";
// 引入item并使用
import tabbarItem from "./component/tabbar/tabBarItem";
export default {
  name: "App",
  components: {
    tabBar,
    tabbarItem
  }
};
</script>

<style>
/* 引入清除默认样式 */
@import "./assets/css/reset.css";
</style>

