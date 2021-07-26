//stack. like pancakes. take one from the top
//this is LIFO. Last-in, first-out

//note. if we were going to use an array as a stack, where would you do it?
//it would be best to do it at the end of the array. because if we shift/unshift, the time complexity is o(n) because we must correct indices
//how about for a linked List?
//it would be best to do it at the front. because to add and remove an item at the front is o(1)
//to add an item to the end if o(1), but to remove it is o(n) for a linked List 
class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class stack {
    constructor(value){//this begins a new linked list
        const newNode = new Node(value)
        this.top = newNode//keep track of the top of our stack. we wont need to mess with the bottom of it
        this.length = 1
    }
    push(value){//O(1) because to push a value onto the end of a linked list is independent of values
        let newNode = new Node(value)    
        if (!this.top){
            this.top = newNode
            this.length++
        }
        newNode.next = this.top
        this.top = newNode
        this.length++
        return this
    }
    pop(){
        if (!this.top){
            return undefined
        }
        if (this.length==1){
            this.top = null
            this.length--
            return this
        }
        let temp = this.top
        this.top=this.top.next
        temp.next=null

        this.length--
        return this
    }
}

let link = new Linkedlist(4)
link.push(3)
link.push(5)