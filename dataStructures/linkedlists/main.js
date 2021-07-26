class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class Linkedlist {
    constructor(value){//this begins a new linked list
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    push(value){//O(1) because to push a value onto the end of a linked list is independent of values
        const newNode = new Node(value)//this creates our new node
        if (!this.head){//if this list has no entries yet
            this.head = newNode//point the head property to this new node
            this.tail = newNode
        } else {//if this being added to a non-null list
            this.tail.next = newNode//this changes the "next" entry from the last node to this new node
            this.tail = newNode//now we set the tail itself to the new Node
        }
        this.length++
        return this//returning the entire linked list
    }
    pop(){//O(n) because we have to iterate over the entire list to arrive the second to last node and change its pointer
        if (!this.head){//if the list is empty
            return undefined
        } else if (this.head==this.tail){//this comparison works because it requires both nodes to have a next of "null"
            this.head = null//to remove our final node we will remove the pointers
            this.tail = null
        } else{//if it is a linked list of more than 1 node
            let temp = this.head
            let pre = this.head
            while (temp.next){//as long as next is not null
                pre = temp //we set pre to the current node we are on
                temp = temp.next//we then set temp to point at the next node
            }//this while loop terminates when temp is at the tail, and pre is at the previous node
            this.tail = pre//set the tail to point at the previous node
            this.tail.next = null        
        }
        this.length--//change length by -1.
        return this//return our list
    }
    unshift(value){//O(1) because adding a new node ot the front is a short constant process time
        let newNode = new Node(value)
        if (!this.head){//if the linked list is empty
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    shift(){//O(1), to remove the first node is a mechanically similar to unshifting. simply involves changing variables of objects in the first iteratrion of our linked list
        if(!this.head){//if there is no entry to the list
            return undefined
        } else if (this.head===this.tail){//if only 1 entry in list
            this.head=null
            this.tail=null
        } else{//more than 1 entries in the list
            let temp = this.head
            this.head = this.head.next//have head equal to where its current entry points to
            temp.next = null//we do this so we can disconnect the old head form the rest of the list
        }
        this.length--
        return this
    }
    get(index){//refers to returning the node at a particular index. this is o(n) because wed need to iterate over each item in the list unless it is the literal head or tail
        if (!this.head||index>(this.length-1)||index<0){//if the requested index is greater than the length of our list or if it is an empty list
        return undefined}
        let count = 0
        let temp = this.head
        while (count!=index){//until we arrive at a node who's count is equal to index
            temp = temp.next//we move onto the next node
            count++//then we add 1 to count otherwise this would run forever
        }
        return temp
    }
    set(index,value){//changes the value at a certain index in the list. this is an o(n) time complexity because we have to iterate to the index
        if (!this.get(index)){return undefined}
        this.get(index).value = value
        return this
    }
    insert(index,value){//this will insert a new node at a particular value. O(n) because we iterate
        if (!this.get(index)){return undefined}//if it isn't a proper index
        if (index==0){this.unshift(value)}
        if (index===this.length-1){this.push(value)}
        let newNode = new Node(value)
        // orrrr use get method
        let temp = this.get(index-1)
        newNode.next = temp.next//our newNode will point to the value at the index we wish to be in
        temp.next = newNode
        // let pre = this.head
        // let temp = this.head
        // for (let i=0;i<index;i++){//pre will represent the point that we add a node to the list
        //     pre=temp
        //     temp=temp.next
        // }
        // pre.next = newNode//sets pointer of previous item to new node
        // newNode.next = temp//sets pointer of new node to subsequent item
        this.length++
        return this
    }
    remove(index){//unless, it is the first or last item, the time complexity is O(n)
        if (!this.head||index>(this.length-1)||index<0){ return undefined//if the list is empty
        }else if (index==0){//if the index is 0, we are just shifting
            this.shift()
        } else if (index==this.length-1){
            this.pop()
        } else {//i must arrive at the node before the index, and then set its next to a different value
            let previous = this.get(index-1)//set temp to node before the one we wish to delete
            let temp = previous.next//set temp to the node we are deleting
            previous.next = previous.next.next//sets the pointer to after the node we want to delete
            temp.next = null //remove node from pointing at our list
            this.length--
        }
        return this

    }
    reverse(){
        //now this is a bit more complicated
        //our steps are: switch head and tail, and then change the pointer direction
        //of each item in the list
        //i'm thinking changing the first item to null, then going down the list switching them
        if (this.length<=1)return undefined
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let previous = null
        for (let i=0;i<this.length;i++){
            next = temp.next//sets var to the subsequent node in the list
            temp.next = previous//sets pointer of our current node to our previous node
            previous = temp//sets var to our current node from our previous node
            temp = next//sets var for our current node to the next one in our iteration
        }
        return this
    }
}

let link = new Linkedlist(4)
link.push(3)
link.push(5)