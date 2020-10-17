- What is a linked list?
    - Is a linear data structure consists of nodes, and each node contains a data field and a reference to the next node.
    - The last node has ref to null.
    - Elements are not stored at contiguous location, they are linked by using pointers/reference.
    - The first entry of the linked list is called the head, if the list is empty the head will be a null reference.

-** Each node will reference a next pointer, even if you set the last node to be null, but it will still be in the list
    Unless you set the next pointer of the previous node to point to node!!!!

- If you are implmenting a linked list for Stack use, first in last out.
    Ex. [1,2,3,4] , operations only occur at the head, then there is no need to implement a tail.
- But if you are doing operations at the end, then can use a tail.
- Disadvantages of tail, takes up more memory, and need to be keep tracked.

- Time Complexity of linked list operations:

Inserting at the end without tail: O(n)
Inserting at the end with tail: P(1) - single operation
