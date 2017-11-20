const Queue = require('./Queue')

const queue = new Queue()
console.log(queue.isEmpty) //true

queue.enqueue('dc')
queue.enqueue('bryant')
queue.enqueue('xiaoyuan')
console.log(queue.size) //3
console.log(queue.isEmpty) //false

queue.dequeue()
queue.dequeue()

queue.print() //xiaoyuan

