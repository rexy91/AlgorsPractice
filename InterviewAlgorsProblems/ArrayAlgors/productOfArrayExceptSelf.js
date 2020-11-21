/* Given an array nums of n intergers where n>1, return an array output such that ouput[i] is equal to the product of all the elements 
of nums except nums[i]

Example:
input: [1,2,3,4]
output: [24,12,8,6]

Beause output[0] => 24 , is the product of 2,3,4 but not 1
       ouput[1] => 12, product of 1,3,4 but not 2

*/

// Solution with O(n) time and O(1) time complexity since answer anwser doesn't count as memory for this problem given.

let productExceptSelf = (nums) => {

    let left_products = []
    let right_products = []
    let results = []
    let length = nums.length
   
    // [1,2,3,4] turns left_products => [1,(1*1),(2*1),(3*2)] => [1,1,2,6]
    // [1,2,3,4] turns right_products => [24,12,4,1]
   
    // First product from left => 1, cuz no acculative product from left
    // First product from right => 1, cuz no acculative product from right
   
    left_products[0] = 1
    right_products[length-1] = 1
   
    // Get left_products array
    // Product at index will equal to product of acculmative product * element before current element.
    // [1,2,3,4] => at index[2] = 3, product will be 2 * acculatvie product = 2 * 1 = 3
    // Accumative product is inside left-products array so we can use that to muplity to element before current index.
   
    // starts with 1, cuz index 0 is already initizaed to be 1.
    for(let i=1; i<length; i++){
       
        left_products[i] = nums[i-1] * left_products[i-1]
        // First loop, i = 0, => nums[1-1] * left_products[1-1] => 1*1 = 1
        // 2nd loop, i=2, left_products[2] = nums[2-1] * left_products[2-1] = 2*1 = 2
        // 3rd looop, i=3, left_products[3] = nums[3-1] * left_products[3-1] = 3 * 2 = 6
    }
    // We wanna start from 2nd last element.
    // It needs to hit zero, we want index from 2,1,0 ,except for the last one.
   
    for(let i=length-2; i>=0; i--){
        right_products[i] = right_products[i+1] * nums[i+1]
        // First loop, right_products = [#,#,#,1]; i=2 ; right_products[2] = right_prodcuts[2+1] * nums[2+1] = 1 * 4 = 4
        // 2nd loop, right_products = [#,#,4,1]; i=1; right_products[1] = right_products[1+1] * nums[1+1] = 4* 3 = 12
        // 3rd loop, right_products = [#,12,4,1]; i=0; right_products[0] = right_products[0+1] * nums[0+1] = 12 * 2 = 24
    }
   
    // Now for the final answer, we just need to mulplity [1,2,3,4] with [24,12,4,1]
    for(let i=0; i<length;i++){
        results[i] = left_products[i] * right_products[i]
    }
    
    // Time Complexity: n+n+n => O(n)
    // Space Complexity: O(1) , results array doens't count as extra memory here.
   
    return results;
}
