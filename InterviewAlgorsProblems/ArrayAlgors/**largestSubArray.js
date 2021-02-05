/*
input: [1,2,5,10,3,8] => [5,10] => 15 largest sum


*/

// Native solution: Find all the possible subarrays O(n^2), and compare their sum O(n). 


let largestSubarray1 = (array) => {
    
    let largestSum = 0
    for(let i=0; i<array.length; i++){
        if(array[i] > largestSum){
            largestSum = array[i]
        }
        // ELement cannot form a subway with repeating itself, so j start with i+1.

        for(let j=0; j<array.length; j++){
            
        }
    }
}

// Approach using Hash. 
let largestSubarray = (array) => {
    let hashmap = {}
    let largestSum = 0
    let acculumativeSum = 0

    // As we are looping thru the array, update the accumativeSum and compare with the largestSum

    
}