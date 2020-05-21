export default class Game2048 {
  constructor() {
    //位数16
    this.arr = [
      [],
      [],
      [],
      []
    ]
    //总数
    this.sum = 0
    //记录填充位置
    this.inArr = []
    //记录空位置
    this.outArr = []
  }
  //生成随机的2，4
  generatorNum() {
    return Math.random() < 0.8 ? 2 : 4
  }

  //生成4*4的二维数组
  generatorArr() {
    let id = 1
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        //数据
        let obj = {
          num: '',
          id: id
        }
        //记录
        let obj1 = {
          i: i,
          j: j,
          id: id
        }
        // obj.num=this.generatorNum() 
        id++
        this.outArr.push(obj1)
        this.arr[i][j] = obj
      }
    }
  }

  //随机插入一个数，如果插入的位置有数字就重新插入,并记录总数
  randomInsert() {

    let index = parseInt(Math.random() * this.outArr.length)
    let a = this.outArr[index].i
    let b = this.outArr[index].j
    let obj = {
      i: a,
      j: b,
      id: this.arr[a][b].id
    }

    this.arr[a][b].num = this.generatorNum()
    this.removeArray(this.arr[a][b].id, this.outArr)
    this.inArr.push(obj)
    this.sum += this.arr[a][b].num
  }

  //数组删除，根据id
  removeArray(id, arr) {
    let index
    for (let i in arr) {
      arr[i].id == id ? index = i : ''
    }
    arr.splice(index, 1)
  }


  //左滑
  slideLeft() {
    //验证是否随机生成
    let confirmRandom = false
    for (let i in this.inArr) {
      //x坐标
      let x = this.inArr[i].i
      //y坐标
      let y = this.inArr[i].j
      //验证x轴
      let confirmX = new Set()
      if (y == 0) {

      } else {

        for (let index = y - 1; index >= 0; index--) {
          if (this.arr[x][index].num == '') {
            this.arr[x][index].num = this.arr[x][index + 1].num
            this.arr[x][index + 1].num = ''
            this.inArr[i].j = index
            this.inArr[i].id--
            confirmRandom = true
          } else {
            if (this.arr[x][index].num == this.arr[x][index + 1].num) {
              for (let set of confirmX) {
                if (set == x && index == 0) {
                  break
                }
              }
              this.arr[x][index].num += this.arr[x][index].num
              this.arr[x][index + 1].num = ''
              this.inArr[i].j = index
              this.inArr[i].id--
              confirmX.add(x)
              confirmRandom = true
            }
          }
        }
      }
    }
    //判断是否生成
    if (confirmRandom == true) {
      this.randomInsert()
    }
  }

  //右滑
  slideRight() {
    //验证是否随机生成
    let confirmRandom = false
    for (let i in this.inArr) {
      //x坐标
      let x = this.inArr[i].i
      //y坐标
      let y = this.inArr[i].j
      //验证x轴
      let confirmX = new Set()

      if (y == 3) {

      } else {

        for (let index = y + 1; index <= 3; index++) {
          if (this.arr[x][index].num == '') {
            this.arr[x][index].num = this.arr[x][index - 1].num
            this.arr[x][index - 1].num = ''
            this.inArr[i].j = index
            this.inArr[i].id++
            confirmRandom = true
          } else {
            if (this.arr[x][index].num == this.arr[x][index - 1].num) {
              for (let set of confirmX) {
                if (set == x && index == 0) {
                  break
                }
              }
              this.arr[x][index].num += this.arr[x][index].num
              this.arr[x][index - 1].num = ''
              this.inArr[i].j = index
              this.inArr[i].id++
              confirmX.add(x)
              confirmRandom = true
            }
          }
        }
      }
    }
    //判断是否生成
    if (confirmRandom == true) {
      this.randomInsert()
    }
  }

  //上滑
  slideUp() {
    //验证是否随机生成
    let confirmRandom = false
    for (let i in this.inArr) {
      //x坐标
      let x = this.inArr[i].i
      //y坐标
      let y = this.inArr[i].j
      //验证x轴
      let confirmY = new Set()

      if (x == 3) {

      } else {

        for (let index = x + 1; index <= 3; index++) {
          if (this.arr[index][y].num == '') {
            this.arr[index][y].num = this.arr[index-1][y].num
            this.arr[index-1][y].num = ''
            this.inArr[i].i = index
            this.inArr[i].id+=4
            confirmRandom = true
          } else {
            if (this.arr[index][y].num == this.arr[index-1][y].num) {
              for (let set of confirmY) {
                if (set == y && index == 0) {
                  break
                }
              }
              this.arr[index][y].num += this.arr[index][y].num
              this.arr[index-1][y].num = ''
              this.inArr[i].i = index
              this.inArr[i].id+=4
              confirmY.add(y)
              confirmRandom = true
            }
          }
        }
      }
    }
    //判断是否生成
    if (confirmRandom == true) {
      this.randomInsert()
    }
  }

  //下滑
  slideDowm() {}
}
let g = new Game2048()
g.generatorArr()
g.randomInsert()
g.randomInsert()
g.randomInsert()
g.randomInsert()
g.randomInsert()
console.log(g.sum)
console.log(g.arr)
console.log(g.inArr)
g.slideLeft()
console.log(g.sum)
console.log(g.arr)
console.log(g.inArr)
g.slideUp()
console.log(g.sum)
console.log(g.arr)
console.log(g.inArr)
