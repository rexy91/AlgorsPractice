class Node{
    constructor(data, next=null){
        // Each node we will keep track of the head
        // And the next pointer, by default we set to null
        // Each node like a box, holds a data(any type) and a next point to the next node.
        this.data = data
        this.next = next
    }
}

//Create class of linked list:
// Linked list will have a head,tail.(If we need a tail to keep the last element)
// If we are only doing operations at the front, like a stack, then we dont need the tail pointer.

class LinkedList{
    constructor(){
        //we are not passing anything when creating an instance, just setting default.
        this.head = this.tail = null
        this.size = 0 // # of nodes
    }

// Insert to the front
// If want to keep track of tail, inserting to the front won't change the tail.
    insertFront(data){
        let node = new Node(data)
        if(!this.head){
            this.head = this.tail = node
            node.next = null 
        }
        // If list is not empty, new node's head will point to the exiting head.
        // Set new head to be the new nodw
        else{
            node.next = this.head
            this.head = node 
        }
        
        this.size += 1
    }

// Insert node to the end of list:
// Without a tail pointer:
// Check if list is empty, if it is, just add new node and next set to null.
// If list is not empty, traverse the list to find the last node, set lastNode.next to be new Node, new Node's next to be null.

    insertEnd(data){
        // Without a pointer, take O(n), because need to traverse n elements to the end of the list.
        // if(!this.head){
        //     this.head = new Node(data)
        // }
        // else{
        //     let current = this.head
        //     while(current.next !== null){
        //         current = current.next
        //     }
        //     // When we reach the end node
        //         current.next = new Node(data)
        // }
        // this.size += 1

        // Insert end with tail pointer takes O(1)
        // Now we are keeping track of the tail as we r inserting to the front.
        // We can then use the tail to add to the end, which will only take constant time.

        if(!this.head){
            //If its empty, new node = head = tail
            this.head = this.tail = new Node(data)

        }else{
            // If its not empty, we do tail.next = new Node(data)
            // Now the new node will also be the new tail.
            this.tail.next = this.tail = new Node(data) 
        }
        this.size += 1
    }

    //Remove front:
    removeFront(){
        // If empty , return null
        if(!this.head){
            return null
        }
        else{
            //If not empty, set head to be null, and the next node to be new head, 
            //And set next of the new node to be its next node.
            this.head = this.head.next
        }
        this.size -= 1 
    }

    // Remove from the end
    // Even with a tail pointer, it will still take O(n) to remove to the end, because we still need to traverse until the second last
    // Node and set next to be null. (different than adding to the end.)
    // Because tail is not the second last node. 
    removeEnd(){
        // Set the head as current
        // Declare a variable called current, to be the current head
        // Declare a variable called temp, to keep track of the previous node
        // Declare temp, decalred it here becaus if we declare it inside the while loop it will only be reconized inside the loop. (scope of let keyword)
        let current = this.head
        let temp
        //If empty , return null
        if(!this.head){
            return null 
        }
        else if(this.size === 1){
            this.head = this.tail = null
        }
        else{
            // If list has more than 1 element, while loop will at least be ran once, so we will have the previous node(second last) set to temp.
        while (current.next !== null){
            // If current.next does not equal to null, means current is not the last node, then we update current to be the next node.
            // And we assign temp to be current, which now is the previous node.
            temp = current
            current = current.next
        }
            // After the while loop, now currnt is the last node, and temp is previous node, which is the second last node  
            // Set second last node 's next pointer to be null to remove the last node of the list.
            // Now the second last node becomes the last node, means we removed the end of the list.
            // We have to set the next of the second last node to be null inorder to remove the last node.
            // If we only set the last node to be null, temp will still be pointing at 5, because we never updated the next pointer.
            temp.next = null
            this.size -= 1 
    }
}
        // Insert at a given position
        // Remember list doesn't have indexes, we need to create counters.
        // Tranvers to the node at target position - 1, set next pointer to be the new node.
        // ** Key point is to get the node before the insert position.

        insertAtPosition(position, data){
            let previousNode = this.head
            let count = 1 // We can start from 1, or 0
            // Input list [1,2,3,4]
            // Ex:
            // We want to insert '5' to position 3, means 5 will be in between 3 and 4.
            // While counter < (3-1) , we update previous and count
            // Once
            while(count < position - 1){
                
            }
        }

        // Print
        // declare current to keep track of current node, and keep going til current is null(end of list)
        // While current exists, means its not the end of the list, keep setting current to be the next node.
        printList(){
            let current = this.head
            if(!current) console.log('empty')
            while(current){
                current = current.next
            }
            console.log(this.size)
        }

        convertListToArray(){
            let array = []
            // Loop thru the list, and push every node to the array. Not just the data. 
            let current = this.head
            while(current){
                array.push(current)
                current= current.next
            }
            console.log(array)
        }

}


let ll = new LinkedList();
ll.insertFront(5)
ll.insertFront(6)
ll.printList()
ll.convertListToArray()

