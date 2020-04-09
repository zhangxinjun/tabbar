<template>
  <div class="tabbar-item" @click="itemClick">
    <!-- 使用具名插槽，使之可以插入对应的内容 -->
    <!-- 所有的插槽都用div包裹起来，防止到插槽被替换的时候插槽上面的一些绑定的数据丢失 -->
    <!-- 没有激活的图片对应的插槽 -->
    <div v-if="!isActive">
      <slot name="tabbar-icon"></slot>
    </div>
    <!-- 活跃状态的图片对应的插槽 -->
    <div v-else>
      <slot name="tabbar-icon-active"></slot>
    </div>
    <!-- 文字对应的插槽 -->
    <div :style="activeColor">
      <slot name="tabbar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  // 组件传参，接收上层组件传递过来的参数
  props:{
    //接收上层路由传递过来的path并规定参数的类型
    path:String,
    // 接收上层路由传递过来的颜色并设置颜色的默认值
    ActiveColor:{
      type:String,
      default:"#ff6700"
    }
  },
  data() {
    return {
      // 是否是活跃状态
      // isActive: true,

    };
  },
  computed:{
    isActive(){
      // 通过$route.path获取当前路由的path，并判断当前路由是传递过来的那个路由
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeColor(){
      // 判断当前活跃路由是哪一个，并给当前活跃的路由设置活跃时的颜色
      return this.isActive ? {color:this.ActiveColor} : {}
    }
  },
  methods:{
    itemClick(){
      // 声明式导航实现路由跳转，跳转路径由上层组件传递过来
      this.$router.push(this.path)
    }
  }
};
</script>

<style>
.tabbar-item {
  flex: 1;
}
.tabbar-icon {
  vertical-align: middle;
  margin-top: 3px;
}
</style>