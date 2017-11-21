function fibonacci(num){
    if(num <= 2){
        return 1
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(5))

// 4 + 3 