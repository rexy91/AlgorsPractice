/*
To remove dup elements in integer array, first sort it, then use slow/fast pointer method.

input: [1,1,2]
output: [1,2]

input:  [1,1,5,7,4,15,10,3,3,2,7]
sorted: [1,1,2,3,3,4,5,7,7,10,15]

output: [1,2,3,4,5,6,10,15]

If nums[slow] = nums[fast], increment fast
If nums[slow] != nums[fast], increment slow, and update it to be nums[fast]

Example Run:
input [1,1,2,2,3]
slow = 0
fast = 0
nums[slow] = 1 nums[fast] = 1 ,  1 = 1, increment fast

nums[slow] = 1, nums[fast] = 1, increment fast
nums[slow] = 1, nums[fast] = 2, increment slow, update to be nums[fast] = 2 
=> [1,2,2,2,3]

nums[slow] = 2, nums[fast] = 2, increment fast
nums[slow] = 2, nums[fast] = 3, increment slow => update to be nums[fast] = 3
=> [1,2,3,2,3] 
Keep increment fast until out of bound.

Now slow pointer is at index 2, => element 3
// Slow pointer is our anwser array 's upper bound, because if all the rest are repeating elements, slow pointer wont be incremented anymore.

For loop to print:
for( let i=0; i<3; i++){

    output: [1,2,3] => all dups are removed. 
}
*/

let removeDupsInplace = (nums) => {
    let slow = 0
    let results =[]

    // It's fast<nums.length NOT fast < nums.length - 1 .
    // Nums.length - 1 is to get the last index.
    // If we want to iterate thru whole array we need i < nums.length !!!! 
    for(let fast=0; fast<nums.length; fast++){
        if(nums[slow] !== nums[fast]){
            slow++;
            nums[slow] = nums[fast]
        }
    }

    // If we want to return an result array with length slow + 1 .
    // + 1 cuz we want the length, not index.
    // So length will last index + 1

    for(let j=0; j<slow+1; j++){
        results.push(nums[j])
    }
    return results
    
}

console.log(removeDupsInplace([1,1,2]))
console.log(removeDupsInplace([1,2,2,2,3]))