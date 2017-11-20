const Dictionary = require('./Dictionary')

const dictionary = new Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')

console.log(dictionary)
// {
//     items:{ 
//        Gandalf: 'gandalf@email.com',
//        John: 'johnsnow@email.com',
//        Tyrion: 'tyrion@email.com' 
//     } 
// }

console.log(dictionary.keys)
// [ 'Gandalf', 'John', 'Tyrion' ]

console.log(dictionary.values)
// [ 'gandalf@email.com', 'johnsnow@email.com', 'tyrion@email.com' ]

console.log(dictionary.items)
// { 
//     Gandalf: 'gandalf@email.com',
//     John: 'johnsnow@email.com',
//     Tyrion: 'tyrion@email.com' 
// }




  