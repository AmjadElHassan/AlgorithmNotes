class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class linkedList {
    constructor(value) {
        let newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value) {
        if (linkedListCheck(this)) {
            let newNode = new Node(value)
            this.tail.next = newNode
            this.tail = newNode
            this.length++
            return this
        } else {
            return 'invalid argument'
        }
    }
    pop() {
        if (linkedListCheck(this)) {
            if (this.length == 1) {
                this.tail = null
                this.head = this.tail
                this.length--
                return this
            }

            let temp = this.head
            let previous
            while (temp != this.tail) {
                previous = temp
                temp = temp.next
            }
            this.tail = previous
            previous.next = null
            this.length--
            return this
        } else {
            return console.log('error', undefined)
        }
    }
    unshift(value) {
        if (linkedListCheck(this)) {
            let newNode = new Node(value)
            newNode.next = this.head
            this.head = newNode
            this.length++
            return this
        } else {
            this.push(value)
            return this
        }
    }
    shift() {
        if (linkedListCheck(this)) {
            if (this.length == 1) {
                this.pop()
                return this
            }

            let newHeadNode = this.head.next
            this.head.next = null
            this.head = newHeadNode
            this.length--
            return this
        } else {
            console.log('error')
            return this
        }
    }
    get(index) {
        if (!linkedListCheck(this) || index < 0 || index > this.length - 1) {
            return 'error'
        }
        if (index == this.length - 1) {
            return this.tail
        }
        let count = 0
        let temp = this.head
        while (count != index) {
            temp = temp.next
            count++
        }
        return temp
    }
    set(index,value){
        if (!linkedListCheck(this) || index < 0 || index > this.length - 1) {
            return 'error'
        }
        let desiredNode = this.get(index)
        desiredNode.value = value
        return this
    }
    insert(index,value){
        if (!linkedListCheck(this) || index < 0 || index > this.length - 1) {
            return 'error'
        }
        if (index==this.length-1){
            return this.push(value)
            
        }
        if (index==0){
            return this.unshift(value)
            
        }
        let newNode = new Node(value)
        let previousNode = this.get(index-1)
        newNode.next = previousNode.next
        previousNode.next = newNode
        this.length++
        return this
    }
    remove(index){
        if (linkedListCheck(this,index)){
            if (index==0){
                return this.shift()
            }
            if (index==this.length-1){
                return this.pop()
            }
            let previous = this.get(index-1)
            let replacementNode = previous.next.next
            previous.next.next=null
            previous.next = replacementNode
            this.length--
            return this
        } else {
            return 'error'
        }
    }
    reverse(){
        if (linkedListCheck(this)){
            if (this.length==1){
                return this
            }
            let previous = null
            let current = this.head
            let proceeding =this.head
            while (proceeding!=null){
                proceeding = proceeding.next
                current.next = previous
                previous = current
                current = proceeding
            }
            current = this.head
            this.head = this.tail
            this.tail = current
            return this
        }else{
            return "error"
        }
    }
}
function linkedListCheck(linkedList, index) {
    if (index){
        if (index>linkedList.length-1||index<0||index==""){
            return false
        }
    }
    if (!linkedList.head || !linkedList.tail || linkedList.length == 0) {
        return false
    } 
        return true
}

let truth = new linkedList(8)
truth.push(7)
truth.push(6)
truth.pop()
truth.shift()
console.log(truth)