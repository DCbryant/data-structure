Array.prototype.mergeSort = function(){
    const merge = (left,right) => {
        const result = []
        let il = 0
        let ir = 0
        // 大的放一堆，小的放一堆
        while(il < left.length && ir<right.length){
            if(left[il] < right[ir]){
                result.push(left[il++])
            }else{
                result.push(right[ir++])
            }
        }
        while(il < left.length){
            result.push(left[il++])
        }
        while(ir < right.length){
            result.push(right[ir++])
        }
        return result
    }
    const mergeSortRes = array => {
        if(array.length === 1){
            return array
        }
        const mid = Math.floor(array.length / 2)
        const left = array.slice(0,mid)
        const right = array.slice(mid,array.length)
        return merge(mergeSortRes(left),mergeSortRes(right))
    }
    return mergeSortRes(this)
}

const arr = [1,71,8,9,21]
console.log(arr.mergeSort())  //[ 1, 8, 9, 21, 71 ]