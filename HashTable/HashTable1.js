const LinkedList = require('../LinkedList/LinkedList')

// 分离链接
class HashTable{
    constructor(){
        this.table = []
    }

    // static HashTable的静态方法，相当于HashTable.xxx，它不会被实例所继承
    // 散列函数
    static loseloseHashCode(key){
        let hash = 0
        for(let codePoint of key){
            hash += codePoint.charCodeAt()
        }
        return hash % 37
    }

    // 修改和增加元素
    put(key,value){
        const position = HashTable.loseloseHashCode(key)
        if(this.table[position] === undefined){
            this.table[position] = new LinkedList()
        }
        this.table[position].append({key,value})
    }

    get(key){
        const position = HashTable.loseloseHashCode(key)
        if(this.table[position] === undefined) return undefined
        const getElementValue = node => {
            if(!node && !node.element) return undefined
            if(Object.is(node.element.key,key)){
                return node.element.value
            }else{
                return getElementValue(node.next)
            }
        }
        return getElementValue(this.table[position].head)
    }

    remove(key){
        const position = HashTable.loseloseHashCode(key)
        if(this.table[position] === undefined) return undefined
        const getElementValue = node => {
            if (!node && !node.element) return false
            if (Object.is(node.element.key, key)) {
                this.table[position].remove(node.element)
                if (this.table[position].isEmpty) {
                    this.table[position] = undefined
                }
                return true
            } else {
                return getElementValue(node.next)
            }
        }
        return getElementValue(this.table[position].head)
    }
}



module.exports = HashTable