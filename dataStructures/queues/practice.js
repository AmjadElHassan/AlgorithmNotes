class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedListQueue{
    constructor(value){
        let newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }//in a queue its like a line, so we will remove a node from 1 end, and we will add onto the other end
    enqueue(value){//we will add a node to the end, because it is o(1), to push onto a linked list
        let newNode = new Node(value)
        if (!this.first){
            this.first = newNode
            this.last = newNode
            this.length++
            return this
        }
        this.last.next = newNode
        this.last = this.last.next
        this.length++
        return this
    }
    dequeue(){//this means we will be removing from the front of the line. removing the fron of a linked list is O(1)
        if (this.length<=0){
            return undefined
        }
        if (this.length==1){
            this.first = null
            this.last = null
        } else {
            let temp = this.first
            this.first = this.first.next
            temp.next = null
        }
        this.length--
        return this
    }
}