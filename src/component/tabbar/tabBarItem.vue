<template>
  <div class="tabbar-item">
      <!-- 使用具名插槽，使之可以插入对应的内容 -->
    <slot name="tabbar-icon"></slot>
    <slot name="tabbar-text"></slot>
  </div>
</template>

<script>
export default {
  name: "tabBarItem"
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