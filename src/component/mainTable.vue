<template>
    <tabBar>
      <tabbarItem path="/home" ActiveColor="#6700ff">
        <!-- 使用具名插槽，插入对应的内容 -->
        <img slot="tabbar-icon" src="~assets/img/4G1_01.png" alt />
        <img slot="tabbar-icon-active" src="~assets/img/4Gkuandai_12.jpg" alt />
        <div slot="tabbar-text">首页</div>
      </tabbarItem>
      <tabbarItem path="/about" ActiveColor="#6700ff">
        <img slot="tabbar-icon" src="~assets/img/4Gkuandai_07.jpg" alt />
        <img slot="tabbar-icon-active" src="~assets/img/4Gkuandai1_2.png" alt />
        <div slot="tabbar-text">详情</div>
      </tabbarItem>
      <tabbarItem path="/shopCat" ActiveColor="#6700ff">
        <img slot="tabbar-icon" src="~assets/img/4Gkuandai_14.jpg" alt />
        <img slot="tabbar-icon-active" src="~assets/img/4G1_08.png" alt />
        <div slot="tabbar-text">购物车</div>
      </tabbarItem>
      <tabbarItem path="profile" ActiveColor="#6700ff">
        <img slot="tabbar-icon" src="~assets/img/4Gkuandai_17.jpg" alt />
        <img slot="tabbar-icon-active" src="~assets/img/4G1_03.jpg" alt />
        <div slot="tabbar-text">我的</div>
      </tabbarItem>
    </tabBar>
</template>

<script>

import tabBar from "./tabbar/tabBar.vue";
// 引入item并使用
import tabbarItem from "./tabbar/tabBarItem.vue";
export default {
    components:{
        tabBar,
        tabbarItem
    }
}
</script>

<style>

</style>