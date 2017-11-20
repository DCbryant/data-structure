const DoublyLinkedList = require('./DoublyLinkedList')

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.insert(0,'23')
doublyLinkedList.insert(1,'24')
doublyLinkedList.insert(2,'25')

doublyLinkedList.removeAt(2)

console.log(doublyLinkedList)

// head:
//     Node {
//     element: '23',
//     prev: null,
//     next: Node { element: '24', prev: [Circular],
//     next: null } },
//     tail:
//     Node {
//     element: '24',
//     prev: Node { element: '23', prev: null, next:
//     [Circular] },
//     next: null },
//     length: 2 
// }
