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
    push(value){//adding value to the end
        let newNode = new Node(value)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
            this.length++
            return this
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    pop(){//remove the last item in list
        if (!this.head){
            return undefined
        }
        if (this.length==1){
            this.head = null
            this.tail = null
            this.length--
            return this
        }
        this.tail = this.tail.prev
        this.tail.next.prev = null
        this.tail.next = null
        this.length--
        return this
    }
    unshift(value){//add value onto the front of the list
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
    shift(){//remove front-most node
        if (!this.head){
            return undefined
        }
        if (this.length==1){
            this.pop()
            return this
        }
        this.head = this.head.next
        this.head.prev.next = null
        this.head.prev = null
        this.length--
        return this
    }
    get(index){
        if (!this.head||index<0||index>this.length-1){
            return undefined
        }
        let temp = this.head
        let counter = 0
        while (counter!= index){
            temp = temp.next
            counter++
        }
        return temp
    }
    set(value,index){
        if (!this.head||index<0||index>this.length-1){
            return undefined
        }
        let desiredNode = this.get(index)
        desiredNode.value = value
        return this
    }
    insert(value,index){
        if (!this.head||this.length==1){
            this.unshift(value)
            return this
        }
        if (index<0||index>this.length-1){
            return undefined
        }
        let newNode = new Node(value)
        let previousNode = this.get(index-1)
        let nextNode = this.get(index-1)
        previousNode.next = newNode
        nextNode.prev = newNode
        newNode.next = nextNode
        newNode.prev = previousNode
        this.length++
        return this
    }
    remove(index){
        if (!this.head||index<0||index>this.length-1){
            return undefined
        }
        if (this.length==1||index==0){
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
console.log(example.get(1))

