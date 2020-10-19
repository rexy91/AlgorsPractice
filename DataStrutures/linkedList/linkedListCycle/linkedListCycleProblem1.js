// Determine if the linked has a cycle.
// We are creating a whole linked list from stcrach.
/* input 3 -> 2 -> 0 -> 4 -> 2 , it has a cycle becaose 4.next points back to node 2 

Hash map solution, traverse each node, see if has been seen inside the hash, if yes, cycle. If not, move to the next, untile current = null, meaning end of list.

First next create the list class: */

class Node{
    constructor(data){
        this.data = data
        this.next = null 
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    insertEnd(data){
        let node = new Node(data)
        if(!this.head){ //If empty
            this.head = node
            node.next = null
        }

        let current = this.head
        let lastNode // Travese to the end to find the last node

        while(current.next !== null){
            current = current.next
        }
        lastNode = current
        // Now we found the last node, update lastNode.next to be the new Node.
        // And the new Node.next to be null. To make it the new last node.
        lastNode.next = node
        node.next = null 

        this.size += 1 
    }

    printList(){
        let current = this.head
        let array = []
        while(current){
            array.push(current.data)
            current =current.next 
        }
        console.log(array)
    }

    // Now make the las node points back to the 2nd node.
}

let LL = new LinkedList()
LL.insertEnd(3)
LL.insertEnd(2)
LL.insertEnd(0)
LL.insertEnd(4)
LL.printList()
