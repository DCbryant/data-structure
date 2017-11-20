const Stack = require('./Stack')

const stack = new Stack()
console.log(stack.isEmpty) //true

// 添加元素
stack.push(233)
stack.push(666)

// 读取属性在添加
console.log(stack.peek) //666
stack.push(11)
console.log(stack.size) //3
console.log(stack.isEmpty) //false