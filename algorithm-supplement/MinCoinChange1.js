// 贪心算法

 class MinCoinChange{
    constructor(coins){
        this.coins = coins
    }

    makeChange(amount){
        const change = []
        let total = 0
        this.coins.sort((a,b) => a<b).forEach(coin => {
            while((total + coin) <= amount){
                change.push(coin)
                total += coin
            }
        })
        return change
    }
}

const minCoinChange = new MinCoinChange ( [ 1, 5, 10, 2, 5])
console.log (minCoinChange. makeChange(36)) //[ 10, 10, 10, 5, 1 ]
