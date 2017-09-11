// 排序二叉树
function BinaryTree(){
    var Node = function(key){
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null
    var insertNode = function(node,newNode){
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
    this.insert = function(key){
        var newNode = new Node(key)
        if(root === null){
            root = newNode
        }else{
            insertNode(root,newNode)
        }
    }

    // 中序遍历:可以从小到大的排序
    // 遍历左边，遍历自身，遍历右边
    var inOrderTraverseNode = function(node,cb){
        if(node !== null){
            inOrderTraverseNode(node.left,cb)
            cb(node.key)
            inOrderTraverseNode(node.right,cb)
        }
    }
    this.inOrderTraverse = function(cb){
        inOrderTraverseNode(root,cb)
    }

    // 后序遍历:可以应用于复制一个节点
    // 遍历自身，遍历左边，遍历右边
    var preOrderTraverseNode = function(node,cb){
        if(node !== null){
            cb(node.key)
            inOrderTraverseNode(node.left,cb)
            inOrderTraverseNode(node.right,cb)
        }
    }
    this.preOrderTraverse = function(cb){
        inOrderTraverseNode(root,cb)
    }
}

var nodes = [8,3,10,1,6,14,4,7,13]
var binaryTree = new BinaryTree()
nodes.forEach(function(key){
    binaryTree.insert(key)
})



var cb = function(key){
    console.log(key)
}
binaryTree.inOrderTraverse(cb)
binaryTree.preOrderTraverse(cb)