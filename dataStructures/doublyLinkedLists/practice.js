class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(value){
        let newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    push(value){
        let newNode = new Node(value)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail=newNode
        this.length++
        return this

    }
    pop(){
        if (!this.head){
            return undefined
        }
        if (this.length==1){
            this.head = null
            this.tail = null
            this.length--
            return this
        }
        let previous = this.tail.prev
        previous.next = null
        this.tail.prev = null
        this.tail = previous
        this.length--
        return this
    }
    unshift(value){
        if (!this.head){
            this.push(value)
            return this
        }
        let newNode = new Node(value)
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    shift(){
        if (!this.head){
            return undefined
        }
        if (this.length==1){
            this.head = null
            this.tail = null
            this.length--
            return this
        }
        let temp = this.head
        this.head = this.head.next
        this.head.prev=null
        temp.next = null
        this.length--
        return this
    }
    get(index){
        if (index<0||index>this.length-1){
            return undefined
        }
        let temp = this.head
        for (let i = 0;i<index;i++){
            temp = temp.next
        }
        return temp
    }
    set(index,value){
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
        }
        let newNode = new Node(value)
        let previousNode = this.get(index-1)
        let nextNode = previousNode.next
        previousNode.next=newNode
        nextNode.prev=newNode
        newNode.next = nextNode
        newNode.prev = previousNode
        this.length++
        return this
    }
    remove(index){
        if (!this.head){
            return undefined
        }
        if (this.length==0){
            this.pop()
            return this
        }
        let temp = this.get(index)
        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        temp.prev = null
        temp.next = null
        this.length--
        return this

    }
}

let example = new DoublyLinkedList(1)
example.push(2)
example.push(3)
example.pop()
example.unshift(4)
console.log(example)