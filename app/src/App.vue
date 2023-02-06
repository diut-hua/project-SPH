<template>
  <div>
    <MyHeader></MyHeader>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <MyFooter v-show="$route.meta.showFooter"></MyFooter>
  </div>
</template>

<script>
//引入
import MyHeader from "./components/Header";
import MyFooter from "./components/Footer";
export default {
  name: "",
  components: {
    MyHeader,
    MyFooter,
  },
  mounted() {
    //派发一个action||获取商品分类的三级列表的数据
    this.$store.dispatch("categoryList");
  },
};
</script>

<style lang='scss' scoped>
</style>