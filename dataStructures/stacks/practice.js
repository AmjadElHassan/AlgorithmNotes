//so first all with a linked list, a good amount of operations require the ability to create a new Node
//so we will automate node creation with a class

class Node {
    constructor(value) {//a Node is an object with 2 properties; its value and a pointer
        this.value = value//value
        this.next = null//pointer
    }
}

//next we will create a class to automate the creation and management of our linked list
class Linkedlist {
//a linked list is a bunch of nodes that point to each other in this way: A => B => C =>
//it is through the pointers of each node that we are even able to access the next node.
//so we could not access Node C from Node A directly. we would HAVE to go to B from A and then to C.
//The first node of a linkedList is called the head, and the last node of a linked list is called the tail
constructor(value) {
        let newNode = new Node(value)//create a new Node to begin our Linked List
        this.head = newNode//point our head to out new Node
        this.tail = newNode//point our tail to the same new Node
        this.length = 1//sets a useful property that will help us keep track of our linked list size
    }
    //so after constructing a new linkedList, we now have a linked list with 1 node

    push(value) {//this method will allows us to add another node to the end of our linked list
        //Time complexity is O(1).why? lets break this down 
        //to add to our list, we must reassign the pointer property of our last node to point at a new node
        //the last Node in our list is instantly available to us because tail is always pointing directly to last node
        //so we don't have to iterate through the whole node to get ot the last item. 
        //so to push a node onto a linkedList:
        //we set the pointer property of our last node pointer to direct to our newNode. then set our tail to point at our newest Node
        if (linkedListCheck(this)) {//I use this function below to make some basic checks. look below.
            let newNode = new Node(value)
            this.tail.next = newNode// changing the next value of our last node to point at the one we want to add
            this.tail = newNode //our tail now points to our new last node
            this.length++//+1 to our length
            return this
        } else {
            console.log('Error')
            return undefined
        }
    }
    pop() {//pop involves us removing our last entry from our linked list
        //time complexity is o(n). It may seem, that removing one off should be as simple as pushing it on, but this is not the case
        //the reason the time complexity is o(n), is because to remove our last node in a list, we have to rewrite the pointer property
        //of the node before it. there is no property we have that points to the second-to-last node of a list, so we have to start at
        //the first node(head) and follow the pointers down the list until we arrive to the second to last node.
        //since we have to iterate over the whole list, time complexity is o(n)
        //we finally set our tail to point at this secont-to-last node now, and then we set it's pointer property to null. 
        //we no longer have any methods left to access the old last node and it has been removed from the list
        if (linkedListCheck(this)) {
            if (this.length == 1) {//if the cast that there is only 1 item in the list
                this.head = null
                this.tail = null
                this.length--
                return this
            }
            let temp = this.head //this variable will be used to iterate over the entire list
            let previous//we will use this to arrive at second to last node
            while (temp != this.tail) {//while our temp value does not point to the last item in our list, do the following:
                previous = temp//set previous variable to temp
                temp = temp.next//moves temp to the next node in the list
            } //this will repeat until temp is at the last node, and previous is at our second to last node
            this.tail = previous//sets our tail to point to the second to last node
            this.tail.next = null//remove the pointer from the last node
            this.length--//reduce length property by one
            return this
        } else {
            return (console.log('error'), undefined)
        }

    }
    unshift(value) {//adding new node to the front
        //time complexity is O(1). why?
        //to add a new node to the front, all we have to do is set the pointer of our new node to the current head node,
        //and then reasign head to point at our newNode.
        if (linkedListCheck(this)) {
            let newNode = new Node(value)//create our new Node
            newNode.next = this.head//our new node will point to where our head is pointing
            this.head = newNode//our head is now pointing to ur new Node
            this.length++
            return this
        } else {//if the linkedList is empty
            this.push(value)
        }
    }
    shift() {//this involves removing the front-most node from the list
        //time complexity is O(1). why?
        //to remove our front value, we must do 2 things:
        //set the pointer of our first node to null
        //set the head to point to our second node
        if (linkedListCheck(this)) {//checking that a list exists
            if (this.length === 1) {//if there is only 1 value in the list
                this.pop()
            } else {//if there are more than 1 node
                let newHead = this.head.next//this is the second node in our list
                this.head.next = null//rewrite the pointer of our first node to null
                this.head = newHead//set head to point to our new first node
                this.length--
            }
        } else {
            return undefined
        }
    }
    get(index) {//this will return a node at a particular index
        //time complexity is o(n) because unless we are referring to the head or tail, we will need to iterate over our list
        if (!linkedListCheck(this) || index < 0 || index > this.length - 1) {
            return undefined
        }
        if (index == this.length - 1) {
            return this.tail
        }
        let count = 0
        let temp = this.head
        while (count != index) {
            temp = temp.next//moves to our next node
            count++
        }
        return temp
    }
    set(index, value) {//this function will change the value of a node in the list
        //time complexity is O(n), because we must iterate
        if (!linkedListCheck(this) || index < 0 || index > this.length - 1) {
            return undefined
        }
        if (index == this.length - 1) {
            this.tail.value = value
        }
        let temp = this.get(index)//we will use our previous function to return us a node at the particular index
        temp.value = value
        return this
    }
    insert(index, value) {//we will be inserting a brand new Node into our linked list
        //O(n), must iterate
        if (!linkedListCheck(this) || index < 0 || index > this.length - 1) {
            return undefined
        }
        if (index==0){
            this.unshift(value)
            return this
        }
        if (index==this.length-1){//we include this because the code following this doesnt take into account if there is no subsequent node
            this.push(value)
            return this
        }
        let newNode = new Node(value)
        let previous = this.get(index - 1)//this returns the node before our new Node should enter
        newNode.next = previous.next//sets our newNode to point at the node that was previously at our desired index
        previous.next = newNode//points the previous node to our new node
        this.length++
        return this
    }
    remove(index){//so we remove a node at the index of the linked list
        //time complexity is o(n)
        if (!linkedListCheck(this)||index<0||index>this.length-1){
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
        //
        let previous = this.get(index-1)//we call the node before the one we want to remove
        let nextNode = previous.next.next //this will set nextNode, the node after the one we want to delete
        previous.next.next = null//removing the pointer from the node we wish to delete
        previous.next = nextNode//pointing our previous node to the node after the one we deleted
        this.length--
        return this
    }
    reverse(){//this will be O(n) complexity
        //now this operation is going to test our functional sense of linkedLists
        //for each node, we must change its pointer in the opposite direction,
        //this will also invovle switching our heads's pointer to null and our tail's pointer to it's previous node
        //then exchaning where our head and tail point, because now the list is in the opposite direction
        //now that we have a core understanding of what we want to do, its time to implement that as a loop
        if (!linkedListCheck(this)){
            return undefined
        }
        let previous = null//this variable will hold the previous node in each loop. 
        let temp = this.head//we alter the pointer property of this point back at previous
        let next = this.head//this variable will store the next node we want to access, while we alter the pointer property of the node before it

        while (next!=null){//this loop will stop when next becomes a non-existant node
            next = temp.next//store the node we will alter in the next iteration
            temp.next = previous//makes our current node point at our previous node
            previous= temp//set previous node to current, in preparation of next iteration
            temp = next//set our current node to the next node
        }
        temp = this.head//store our head node
        this.head = this.tail//set our head to point at our tail node
        this.tail = temp//set our tail to point at our previous head node
        return this //list reversed
    }
}

function linkedListCheck(linkedList) {
    if (!linkedList.head || !linkedList.tail||!linkedList.length) {//making sure all linkedList properties exist
        return false
    }
    else {
        return true
    }
}

let truth = new Linkedlist(1)
truth.push(2)
truth.push(3)
console.log(truth)
