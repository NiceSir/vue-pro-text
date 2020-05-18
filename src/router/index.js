import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from 'components/main/Home'
import User from 'components/main/User'
import GreedySnake from 'components/main/GreedySnake'
import Game2048 from 'components/main/Game2048'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/user',
      name:'user',
      component:User
    },
    {
      path:'/greedysnake',
      name:'greedysnake',
      component:GreedySnake
    },
    {
      path:'/game2048',
      name:'game2048',
      component:Game2048
    }

  ]
})
