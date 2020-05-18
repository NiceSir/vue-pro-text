export default class Game2048{
    constructor(){
        //位数16
        this.arr=[]
        //总数
        this.sum=0
    }
    //生成随机的2，4
    generatorNum(){
        return Math.random()<0.8?2:4
    }

    //生成4*4的二维数组
    generatorArr(){
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                let obj={
                    num:'',
                    order:'0,0',
                    id:0
                }
                // obj.num=this.generatorNum() 
                obj.order=i+','+j
                
                this.arr.push(obj)
            }
        }
        for(let i in this.arr){
            this.arr[i].id=i
        }
    }

    //随机插入一个数，如果插入的位置有数字就重新插入,并记录总数
    randomInsert(){
        let i=parseInt(Math.random()*4)
        let j=parseInt(Math.random()*4)
        for(let array of this.arr){
            // console.log(array.num)
            
            if(array.order==i+','+j){
                if(array.num!=''){
                    this.randomInsert()
                }else{
                    array.num=this.generatorNum()
                    this.sum+=array.num
                }
                // console.log(array.num)
            }
        }
        
    }

}