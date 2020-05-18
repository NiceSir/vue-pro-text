<template>
  <div id="game2048">
    <div class="sum">总数
      {{total}}
    </div>
    <div class="game">
      <div class="chess" v-for="item in arr" :key='item.id'>
        {{item.num}}
      </div>
    </div>
  </div>
</template>

<script>
import Game2048 from 'assets/js/game2048'
export default {

    name:'Game2048',
    data(){
      return{
        arr:[
          {
            num:'',
            order:''
          }
        ],
        total:0
      }
    },
    created(){
      this.beginGame()
    },
    methods:{

      //开始游戏
      beginGame(){
        let game=new Game2048()
        game.generatorArr()
        game.randomInsert()
        game.randomInsert()
        this.arr=game.arr
        this.total=game.sum
        
      }
    }
}
</script>

<style lang="scss" scoped>
#game2048{
  // width: 15rem;
  margin: 0 0.5rem;
  padding: 0 0.5rem;
  overflow: hidden;
  .sum{
    margin: 0.5rem 6rem 0;
    text-align: center;
  }
  .game{
    width: 14rem;
    height: 14rem;
    background-color: #fff;
    display: flex;
    flex-flow: row wrap;
    .chess{
      // margin: .3rem;
      width: 3.5rem;
      height: 3.5rem;
      border: 1px solid red;
      border-radius: 20px;
      box-sizing: border-box;
    }
  }
}
</style>