Array.prototype.selectionSort  = function(){
        // 找到最小值放到第一位
        let indexMin 
        for(let i=0;i<this.length - 1;i++){
            indexMin = i
            for(let j=i;j<this.length;j++){
                if(this[indexMin] > this[j]){
                    indexMin = j
                }
            }
            if(i !== indexMin){
                [this[i],this[indexMin]] = [this[indexMin],this[i]]
            }
        }
    
        return this
    }
    
const arr = [1,71,8,9,21]
console.log(arr.selectionSort())  //[ 1, 8, 9, 21, 71 ]