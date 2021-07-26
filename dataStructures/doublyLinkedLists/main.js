class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    push(value){
        //time complexity is the same as a singly-linked list. O(1). constant time operations
        let newNode = new Node(value)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        }
        this.tail.next = newNode//set the last node in our list to point to the new node
        newNode.prev = this.tail//set our new node to point back. this step is the only difference between a doubly and singly linked list
        this.tail = newNode//set tail to point to our new last node
        this.length++
        return this
    }
    pop(){//to pop off a value would be O(n) for a singly linked list, but the prev attribute turns this operation into O(1) for a doubly linked list
        if (!this.head){
            return this
        }
        if (this.length==1){
            this.head = null
            this.tail = null
            this.length--
            return this
        }
        let second2Last = this.tail.prev
        second2Last.next = null
        this.tail.prev = null
        this.tail = second2Last
        this.length--
        return this
    }
    unshift(value){
        if (!this.head){
            this.push(value)
            return this
        }
        let newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }
    shift(){
        if (!this.head){
            return undefined
        }
        if (this.length==1){
            this.pop()
            return this
        }
        let temp = this.head
        this.head=this.head.next
        this.head.prev = null
        temp.next=null
        this.length--
        return this
    }
    get(index){//time complexity is O(n)
        if (index<0||index>this.length-1){
            return undefined
        }
        let temp = this.head
        if (index<this.length/2){
            for (let i=0;i<index;i++){
                temp = temp.next
            }
        } else {
            temp = this.tail
            for (let i=this.length-1; i>index; i--){
                temp = temp.prev
            }
        }
        return temp
    }
    set (index,value){
        if (index<0||index>this.length-1){
            return undefined
        }
        let desiredNode = this.get(index)
        desiredNode.value = value
        return this
    }
    insert(index,value){
        if (index<0||index>this.length-1){
            return undefined
        }
        if (index==0){
            this.unshift(value)
            return this
        }
        let newNode = new Node(value)
        let previous = this.get(index-1)
        let after = previous.next
        previous.next = newNode
        newNode.prev = previous
        newNode.next = after
        after.prev = newNode
        this.length++
        return this
    }
    remove(index){
        if (index<0||index>this.length-1){
            return undefined
        }
        if (index==0){
            this.shift()
            return this
        }
        if (index==this.length-1){
            this.pop()
            return this
        }
        let temp = this.get(index)
        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        temp.next = null
        temp.prev = null
        this.length--
        return this
    }
}

let example = new DoublyLinkedList(1)
example.push(2)
example.push(3)
example.pop()
example.unshift(4)
example.shift()
example.insert(1,8)
example.remove(1)
console.log(example)