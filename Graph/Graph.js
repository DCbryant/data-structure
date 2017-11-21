const Dictionary = require('../Dictionary/Dictionary')

class Graph{
    constructor(){
        this.vertices  = []
        this.adjList = new Dictionary()
    }

    // 添加顶点
    addVertex(v){
        this.vertices.push(v)
        this.adjList.set(v,[])
    }

    // 添加线
    addEdge(v,w){
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }

    toString(){
        return this.vertices.reduce((r,v,i) => {
            return this.adjList.get(v).reduce((r,w,i) => {
                return r + `${w}`
            },`${r}\n${v} => `)
        },'')
    }

    // breadth first search
    bfs(v,cb){
        const read = []
        const adjList = this.adjList
        let pending = [v || this.vertices[0]]
        const readVertices = vertices => {
            vertices.forEach(key => {
                read.push(key)
                pending.shift()
                adjList.get(key).forEach(v => {
                    if(!pending.includes(v) && !read.includes(v)){
                        pending.push(v)
                    }
                })
                if(cb) cb(key)
                if(pending.length) readVertices(pending)
            })
        }
        readVertices(pending)
    }

    // depth first search
    dfs(cb){
        const read = []
        const adjList = this.adjList
        const readVertices = vertices => {
            vertices.forEach(key => {
                if(read.includes(key)) return false
                read.push(key)
                if(cb) cb(key)
                if(read.length !== this.vertices.length){
                    readVertices(adjList.get(key))
                }
            })
        }
        readVertices(adjList.keys)
    }
}

module.exports = Graph