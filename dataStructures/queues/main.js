//Queue. this is like waiting in a line
//this is FIFO. Last-in, first-out

//note. an array would be a bad queue. why?

//both ends of a data structure are involved within a queue
//whether we add or remove from the front our array, the time complexity is O(1), so theres no way to avoid a o(n) with an array queue

//can a singlyLinked list be a good queue?
//yes. why? to add a node to the end of a linkedList is O(1). to remove a linkedList from the front is also O(1)
//so the tail would be the last person in a queue, and the thead would be the first person in line,
//because we are removing from the head, and adding new nodes to the tail

//how about for a linked List?
//it would be best to do it at the front. because to add and remove an item at the front is o(1)
//to add an item to the end if o(1), but to remove it is o(n) for a linked List 

class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class Queue {
    constructor(value){//this begins a new linked list
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }
    enqueue(value){//O(1) because to push a value onto the end of a linked list is independent of values
        let newNode = new Node(value)    
        if (!this.first){
            this.first = newNode
            this.last = newNode
        } else {//remember we are adding onto the end of the linkedlist so we will be adding a node to the last node
            this.last.next = newNode
            this.last = this.last.next    
        }
        this.length++
        return this
    }
    dequeue(){
        if (!this.head){
            return undefined
        }
        
        if (this.length==1){
            this.first = null
            this.last = null
            this.length--
            return this
        }
        let temp = this.first
        this.first = this.first.next
        temp.next = null
        this.length--
        return temp
    }
}

let link = new Linkedlist(4)
link.push(3)
link.push(5)