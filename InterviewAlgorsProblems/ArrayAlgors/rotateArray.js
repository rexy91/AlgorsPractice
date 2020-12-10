/*
Given the array, rotate the array by k steps, k != negative.

input: [1,2,3,4,5,6,7] k = 3
output: [5,6,7,1,2,3,4]

Steps:
rotate 1 step to the right: [7,1,2,3,4,5,6]
rotate 2 step to the right: [6,7,1,2,3,4,5]
rotate 3 step to the right: [5,6,7,1,2,3,4]

Each step is popping last element off, to the front end shift to the right. 
*/

// Brute Force
// Rotate all the elements of the array in k steps by rotating the elements by 1 unit in each step.
// Outter for loop for k times, inner for loop for shifting each element to the right.
// Time(n * k)
// Space O(1), we are only modifying the original array. 

let rotateArrayBruteForce = (nums, k) => {
    // 3 % 7 is 3 
    // 2 % 7 is 2
    // Anything smaller than the legnth is itself?
    
    k = k % nums.length  // To speed up the rotation.

    let temp, previous
    for (let i=0; i<k; i++){
        previous = nums[nums.length-1]
        for(let j=0; j< nums.length-1; j++){
            temp=nums[j]
            nums[j] = previous
            previous = temp
        }
    }
}

// Solution Using Extra memory:
// !!! We use extra array where we place every element of the array at its correct position.
// !!! The number at index i in the original array is placed at the index (i+k) % length of array. !!!!!!
// !!! Then we copy the new array to the origin one.

//Time: O(n) 
//Space: O(n) , n elements for the copy array.

let rotateArrayExtraMemorySolution = (nums, k) => {
    // Only need to loop thru array once, to place each element at its correct position.
    // Then copy them back to the original array.

    // Array to copy
    let copyArray = []

    // Loop thru elements
    for(let i=0; i<nums.length; i++){
        copyArray[(i+k) % nums.length] = nums[i]
    }

    for(let i=0; i<nums.length; i++){
        nums[i] = copyArray[i] // Back to orignal array 
    }

    return nums
}

console.log(rotateArrayExtraMemorySolution([1,2,3,4,5,6,7])) // Its good, cant test here but solution works. 

