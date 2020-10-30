// Kth largest element.


// Solution with priority queue:
// No built in heap in javascript

// With java:

    1. declare a max heap (root will be lartest)
    2. insert all elemnts in to the heap, when heap.length is larger than k, pop the root.
    3. Now the heap will have the k largest as the root. Because we popped anything beyond that.
    4. Just return heap.remove() => will be the root which is the kth largest. 



