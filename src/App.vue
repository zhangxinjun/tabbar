
<template>
  <div id="app">
    <router-view></router-view>
    <main-table/>
  </div>
</template>

<script>
import mainTable from "./component/mainTable"
export default {
  name: "App",
  components: {
   mainTable
  }
};
</script>

<style>
/* 引入清除默认样式 */
@import "./assets/css/reset.css";
</style>

