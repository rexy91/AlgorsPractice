/* Number of continoues sub arrays with sum = k
Example:
input [3,4,7,2,-3,1,4,2]
output 4  => [3,4] , [7], [7,2,-3,1], [1,4,2] total of 4 sub arrays

Approach:
Without hash:
Find all the possible subarrays O(n^2), initialize count = 0, and check every subarray if they add to sum, then increment count by 1.
For each subarray we also need to find the sum O(n) , total time O(n^2 * n => n^3)

Two Pointer Method:
Left pointer initially pointing to index 0
Right pointer initialy pointing to index 0



Hashmap solution: *** 
Keep the accumulative sum, from index 0 to the last index as the key.
And the count of that sum occurance to be the value.

If in the hash contains a (target - clumative sum) , that means one subarray adds up to the target already exist. 

Time Compleixy: O(n), we are only looping it once. 
Space: O(n), hash map may contain up to n distinct entries in the worst case. */

let sumSubarraySum = (array, target) => {
    let hash = {}
    hash['0'] = 1 
    let sum = 0 // Accumulative sum, updating sum when looping thru every element. 

    let results = 0 // This is the count of subarray solutions, to be returned. 

    for (let i=0; i<array.length; i++){

        sum += array[i]
        let difference = sum - target // (to avoid negative)
        
        // Just like pair sum, we need to chekc if difference exists in the hash, if yes, then we have a subarray already. Increment result by 1.
        // If it contains it, we found a subarray, increment the result. 

        if(hash[difference]){
            results += 1 
        }
        //We append the current accumative sum to the hash, to be used for next iterations.
        //Just like the pair sum problem(we append the current element), here we append the acculative sum to the hash, with value being appearance of the sum.(becaues it can be appeared again later on, if ther is netagive number)

        // Append the culamtive sum to the hash, to be used in next ierations.
        hash[sum] ? hash[sum] = hash[sum] + 1 : hash[sum] = 1 
        
    } // End of forloop
    console.log(hash)
    return results
    
}

console.log(sumSubarraySum([2,3,4,-5,10,-5], 5))
