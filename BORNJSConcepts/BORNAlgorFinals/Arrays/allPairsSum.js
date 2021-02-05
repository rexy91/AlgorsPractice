/*
Find all pairs that sum to target value, not EXACTLY one solution.
input: [0,14,0,4,7,8,3,5,7]
Target: 11
pairs:
(7,4)
(3,8)
(7,4)

Naitive(brute force)
Nested loop, compare current element with every other element, if its a pair, append to the results.

*** Cannot use hash method, because there is more than 1 solution. 
Sorting Method:
Sort the array, 
left pointer + right pointer
If === sum, it's a pair.
If < sum, increment left.
If > sum, increment right.

input:[0,14,0,4,7,8,3,5,7]
sorted: [0,0,3,4,5,7,7,8,14]

Time: O(nlogn)
space: O(n) , might be n pairs in result array. 

*/


let pairSumSortedMethod = (nums,target) => {
    let results = []
    let sorted = nums.sort((a,b) => a-b) //O(nlogn), this will be the run time, nlogn + o(n) while loop is just => O(nlogn)
    let left = 0
    let right = sorted.length - 1

    while(left < right){
        let sum = sorted[left] + sorted[right]
        if(sum === target){
            results.push([sorted[left],sorted[right]])
            // Keep checking
            left++
            right--
        }
        else if(sum < target){
            left++
        }
        else{
            right--
        }
    }
    return results
}

console.log(pairSumSortedMethod([0,14,0,4,7,8,3,5,7], 11))


