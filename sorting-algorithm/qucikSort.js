Array.prototype.quickSort = function(){
    const partition = (array,left,right) => {
        let pivot = array[Math.floor((left+right) / 2)]
        let i = left
        let j = right
        while(i <= j){
            while(array[i] < pivot){
                i++
            }
            while(array[j] > pivot){
                j--
            }
            if(i <= j){
                [array[i],array[j]] = [array[j],array[i]]
                i++
                j--
            }
        }
        return i
    }

    const quick = (array,left,right) => {
        let index
        if(array.length > 1){
            index = partition(array,left,right)
            if(left < index - 1){
                quick(array,left,index - 1)
            }
            if(left < right){
                quick(array,index,right)
            }
        }
    }

    quick(this,0,this.length-1)
    return this
}

const arr = [1,71,8,9,21]
console.log(arr.quickSort())  //[ 1, 8, 9, 21, 71 ]