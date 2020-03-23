<template>
  <div class="tabbar">
    <!-- 就只有一个插槽，到时候对应的内容会插入进来 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  components: {}
};
</script>

<style>
.tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: #ddd;
  height: 49px;
  font-size: 14px;
}
</style>