Array.prototype.bubbleSort = function(){
    for(let i=0;i<this.length;i++){
        for(let j=0;j<this.length-i-1;j++){
            if(this[j] > this[j+1]){
                [this[j],this[j+1]] = [this[j+1],this[j]]
            }
        }
    }
    return this
}

const arr = [1,71,8,9,21]
console.log(arr.bubbleSort())  //[ 1, 8, 9, 21, 71 ]
