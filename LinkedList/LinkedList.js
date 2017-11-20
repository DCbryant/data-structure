// 链表节点
class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

// 链表
class LinkedList{
    constructor(){
        this.head = null
        this.length = 0
    }

    // 追加元素
    append(element){
        const node = new Node(element)
        let current = null
        // 将node追加到当前元素后面
        if(this.head === null){
            this.head = node
        }else{
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.length++
    }

    // 任意位置插入元素
    insert(position,element){
        // 检查跨越值
        if(position >= 0 && position <= this.length){
            const node = new Node(element)
            let current = this.head
            let privous = null
            let index = 0
            if(position === 0){
                this.head = node
            }else{
                while(index++ < position){//将当前节点的下一个节点设置为插入的node
                    privous = current
                    current = current.next
                }//privous -> node -> current
                node.next = current
                privous.next = node
            }
            this.length++
            return true
        }
        return false
    }

    // 移除指定位置元素
    removeAt(position){
        // 检查跨越值
        if(position > -1 && position < length){
            let current = this.head
            let previous = null
            let index = 0
            // 把current这个节点除去
            if(position === 0){
                this.head = current.next
            }else{
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                // previous ->current(除去当前节点) -> next
                previous.next = current.next
            }
            this.length--
            return current.element
        }
        return null
    }

    // 寻找元素下标
    findIndex(element){
        let current = this.head
        let index = -1
        while(current){
            if(element === current.element){
                return index + 1
            }
            index++
            current = current.next
        }
        return -1
    }

    // 删除指定文档
    remove(element){
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    isEmpty(){
        return !this.length
    }

    size(){
        return this.length
    }

    // 转为字符串
    toString(){
        let current = this.head
        let string = ''
        while(current){
            string += ` ${current.element}`
            current = current.next
        }
        return string
    }
}

module.exports = LinkedList