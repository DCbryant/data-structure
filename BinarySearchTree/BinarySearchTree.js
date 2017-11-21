class Node{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(key){
        const newNode = new Node(key)
        const insertNode = (node,newNode) => {
            if(newNode.key < node.key){
                if(node.left === null){
                    node.left = newNode
                }else{
                    insertNode(node.left,newNode)
                }
            }else{
                if(node.right === null){
                    node.right = newNode
                }else{
                    insertNode(node.right,newNode)
                }
            }
        }

        if(!this.root){
            this.root = newNode
        }else{
            insertNode(this.root,newNode)
        }
    }

    // 中序遍历：可以对树进行排序
    inOrderTraverse(cb){
        const inOrderTraverseNode = (node,cb) => {
            // 从小到大，即是左 ->本身 ->右
            if(node !== null){
                inOrderTraverseNode(node.left,cb)
                cb(node.key)
                inOrderTraverseNode(node.right,cb)
            }
        }
        inOrderTraverseNode(this.root,cb)
    }

    // 先序遍历：优先于后代节点,打印一个结构化文档
    preOrderTraverse(cb){
        const preOrderTraverseNode = (node,cb) => {
            if(node !== null){ // 自己 -> 左 -> 右 
                cb(node.key)
                preOrderTraverseNode(node.left,cb)
                preOrderTraverseNode(node.right,cb)
            }
        }
        preOrderTraverseNode(this.root,cb)
    }

    // 后序遍历：先访问节点的后代节点，再访问节点本身 :计算一个目录和它的子目录中所有文件所占空间的大小
    postOrderTraverse(cb){
        const postOrderTraverseNode = (node,cb) => {
            if(node !== null){
                postOrderTraverseNode(node.left,cb)
                postOrderTraverseNode(node.right,cb)
                cb(node.key)
            }
        }
        postOrderTraverseNode(this.root,cb)
    }

    min(node){
        const minNode = node => {
            return node ? (node.left ? minNode(node.left) : node) : null
        }

        return minNode(node || this.root)
    }

    max(node){
        const maxNode = node => {
            return node ? (node.right ? maxNode(node.right) : node) : null
        }
        return maxNode(node || this.right)
    }

    search(key){
        const searchNode = (node,key) => {
            if(node !== null) return false
            if(node.key === key) return node
            return searchNode((key < node.key) ? node.left : node.right,key)
        }
        return searchNode(root,key)
    }

    remove(key){
        const removeNode = (node,key) => {
            if(node === null){
                return null
            }
            if(key < node.key){
                node.left = removeNode(node.left,key)
                return node
            }else if(key > node.key){
                node.right = removeNode(node.right,key)
                return node
            }else{
                // 该节点没有左节点、右节点，处于最下层
                if(node.left === null && node.right === null){
                    node = null
                    return node
                }
                // 若删除的节点有右孩子，将当前节点的右孩子指向当前节点的父节点
                if(node.left === null){
                    node = node.right
                    return node
                }
                // 若删除的节点有左孩子，将当前节点的左孩子指向当前节点的父节点
                if(node.right === null){
                    node = node.left
                    return node
                }

                //被删除的节点有两个孩子节点
                // 找到当前节点的右孩子中的最小节点
                let minNode = this.min(node.right)
                // 将当前的值替换为找到的最小节点(为了使之成为一个搜索二叉树)
                node.key = minNode.key
                // 删除最小节点
                node.right = removeNode(node.right,minNode.key)
                return node
            }
        }
        return removeNode(this.root,key)
    }

}

module.exports = BinarySearchTree