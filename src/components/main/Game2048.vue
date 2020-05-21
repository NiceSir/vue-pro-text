<template>
  <div id="game2048">
    <div class="sum">总数
      {{total}}
    </div>
    <div class="game" ref="div" @touchstart='touchBegin' @touchend='touchGo'>
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
        arr:[],
        total:0,
        //触摸开始
        beginX:0,
        beginY:0
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
             
      },

      //触摸开始事件
      touchBegin(e){
        let beginX=e.touches[0].clientX
        let beginY=e.touches[0].clientY
        this.beginX=beginX
        this.beginY=beginY
      },

      //触摸结束事件
      touchGo(e){
        // console.log(e.targetTouches)
        // console.log(e.changedTouches)
        let moveX=e.changedTouches[0].clientX
        let moveY=e.changedTouches[0].clientY

        //滑动矢量判断方向
        let distanceX=moveX-this.beginX
        let distanceY=moveY-this.beginY

        if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX>0){
         console.log('往右滑动');
        }else if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX<0){
         console.log('往左滑动');
        }else if(Math.abs(distanceX)<Math.abs(distanceY) && distanceY<0){
         console.log('往上滑动');
        }else if(Math.abs(distanceX)<Math.abs(distanceY) && distanceY>0){
          console.log('往下滑动');
        }else{
          console.log('点击未滑动');
        }
      },

      //左滑操作
      slideLeft(){
        window.setTimeout()
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