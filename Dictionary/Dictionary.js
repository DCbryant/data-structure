class Dictionary{
    constructor(){
        this.items = {}
    }

    set(key,value){
        this.items[key] = value
    }

    get(key){
        return this.items[key]
    }

    remove(key){
        delete this.items[key]
    }

    get keys(){
        return Object.keys(this.items)
    }

    get values(){
        return Object.values(this.items)
    }
}

module.exports = Dictionary