const LinkedList = require('./LinkedList')


const linkedList = new LinkedList()

console.log(linkedList) //{ head: null, length: 0 }
linkedList.append(2)
linkedList.append(6)
linkedList.append(24)
linkedList.append(152)

linkedList.insert(3, 18)
console.log(linkedList)
// {
//     head: Node { element: 2, next: Node { element: 6
//   , next: [Object] } },
//     length: 5 
// }

  
console.log(linkedList.findIndex(24)) //2

