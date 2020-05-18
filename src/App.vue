<template>
  <div id="app">
    <header>头部</header>
    <main><router-view></router-view></main>
    <footer><FooterNav/></footer>
  </div>
</template>

<script>
import FooterNav from 'components/footer/FooterNav'
export default {
  name: 'App',
  components:{
    FooterNav
  }
}
</script>

<style lang="scss">
html,body,div{
  padding: 0;
  margin: 0;
}
#app{
header{
  height: 4rem;
};
main{
  width: 16rem;
height: 20rem;
background-color: #faaa;
};
footer{
  position:fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3rem;
}
}
</style>
