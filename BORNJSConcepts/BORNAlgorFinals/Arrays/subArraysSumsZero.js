/*
Given an array of positive and negative numbers, find if there is a subarray(of size at-least one) with 0 sum.
Don't need to return the actual indexes or elements, just true or false.

input: [4,2,-3,1,6]
output: true, There is a sub array with zero sum from index 1 to 3.

input:[-3,2,3,1,6]
output: true

Brute force, nested loop, outer loop picks i, inner looks check i with other elements if it adds to zero.
O(n^2)

Hashing Solution:
Store accumative sum, if current iteration 's accumative sum plus a sum inside the hash === 0, there is an answer, return true. 

input: [4,2,-3,1,6]
Accumative Sums:
4,
4+2 = 6
6 + -3 = 3
3 +1 = 4
4 + 6 = 10
=> [4,6,3,4,10]
If we have repeated aculamtive sum, there is a zero sum.
Because when we store acumative sum 4 inside hash, then we go to accumtive sum 4 again, 4 - hash's 4 = 0.
*/

// Key: Every loop, check if (target - accumative) exist in the hash, if yes, that's a subarray answer, if not, insert accumative sum.

let subArraySumsZero = (nums) => {
    let accumativeSum = 0
    let hash = {}
    hash[0] = 1 //In case 0 itself is the answer. [0] is a subarray that sum to k. So target - 0 = 0 - 0 = 0, is in the hash.

    for (let i=0; i<nums.length-1; i++){

        accumativeSum += nums[i]
        // If the difference is in the hash that sums to zero.

        // ** Its accuSum - 0, because we are not scanning for the negative in the hash, we want positive.
        // If 0 - 4 = -4, then we need a -4 to add to zero, but we dont have -4 we have + 4
        // To get around this, we find accSum - 0 instead, => 4 - 0 = 4, find a 4 in hash to sum to zero.


        if(hash[accumativeSum - 0] !== undefined){
            return true // there is at least one subarray. 
        }

        // Check if accumative sum is already in the hash, if yes just increment value, if not insert

        hash[accumativeSum] ? hash[accumativeSum] += 1 : hash[accumativeSum] = 1 
        
    }
    console.log(hash)

    return 'No subarray sums to zero!'
}

console.log(subArraySumsZero([4,2,-3,1,6]))