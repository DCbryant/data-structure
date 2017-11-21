Array.prototype.insertionSort = function(){
    let j
    let temp 
    for(let i=1;i<this.length;i++){
        j = i
        temp = this[i]
        // 假设第一项已经排序，用第二项与第一项排序
        // 12 | 23 | 34 | 45...
        // 谁比较大就当做temp继续跟后来的比较
        while(j > 0 && this[j - 1] > temp){
            this[j] = this[j-1]
            j--
        }
        this[j] = temp
        console.log(this.join(', '))
    }
    return this
}

const arr = [1,71,8,9,21]
console.log(arr.insertionSort())  //[ 1, 8, 9, 21, 71 ]