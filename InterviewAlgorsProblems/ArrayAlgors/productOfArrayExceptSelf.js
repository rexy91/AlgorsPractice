/* Given an array nums of n intergers where n>1, return an array output such that ouput[i] is equal to the product of all the elements 
of nums except nums[i]

Example:
input: [1,2,3,4]
output: [24,12,8,6]

Beause output[0] => 24 , is the product of 2,3,4 but not 1
       ouput[1] => 12, product of 1,3,4 but not 2

*/


// Solution with O(n) time and O(1) time complexity since answer anwser doesn't count as memory for this problem given.

let prodocutExceptSelf = (nums) => {
    let size = nums.length
    let left_product = []
    let right_product = []
    let results_array = []

    left_product[0] = 1
    right_product[size-1] = 1

    //To get array products from left to right 
    // FIrst one already declared to be 1, so start from 2nd number which is index 1.
    for(let i=1; i<size; i++){

    }
}
