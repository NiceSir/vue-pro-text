<template>
  <div id="footer-nav">
      <router-link :to="{name:'home'}">首页</router-link>
      <router-link :to="{name:'greedysnake'}">贪吃蛇</router-link>
      <router-link :to="{name:'game2048'}">2048</router-link>
      <router-link :to="{name:'user'}">个人</router-link>
  </div>
</template>

<script>
export default {
 name:'FooterNav'
}
</script>

<style lang="scss" scoped>
#footer-nav{
  height: 100%;
  // padding: 0.8rem 0.5rem;
  display: flex;
  justify-content: space-around;
  line-height: 3rem;    
  a{
    text-decoration: none;
    flex: 1;
    text-align: center;
    vertical-align: middle;
  }
}
</style>