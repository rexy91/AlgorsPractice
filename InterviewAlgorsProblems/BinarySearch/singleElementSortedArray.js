/*
Given sorted array consisting only intergers where every elemetns appears exactly twice, except for one element which appears exactly once.
Find the number. in O(logn) and space O(1)
input nums = [1,1,2,3,3,4,4,8,8]
output: 2


Binary Search Approcach:
given [1,1,2,3,3,4,4,8,8]

First check if the first element is equal to the next, if not, its our answer.
2nd   check if the last element is equal to the 2nd last, if not, its our answer.

If not, then all same pairs should start with odd index and end on even index. Because [1,1,2,2,3 etc...]
WHEN the unique number is presented, then the pairs will start with odd index and end on even index, discrupted by the unique element.
=> [1,1,2,3,3] => index [0,1,2,3,4] 

So Binary search parition: We find the middle element, compare it with the one before it and after it, if not the same, its the answer.

Check current element 's index, if it ends on even index && its the same as next element, means unique element hasn't seen, go right.
                                if it ends on odd index && its the same as the previous element, means unique element hasn't been seen, go right. 

IF NOT: then means its not seen, go right. (by incrementing the low to be mid + 1)

*/


let binarySearchUniqueElement = (nums) => {

    let high = nums.length-1 // High index to be the last index
    let low = 0
    let mid

    // Boundries check
    // If one element, return it. Must be unique 
    if(high === 0){
        return nums[high]
    }
    else if(nums[0] !== nums[1]){ // If first element doesn't equal to next, its unique
        return nums[0]
    }
    else if(nums[high] !== nums[high-1]){ //If last element is unique.
        return nums[high]
    }

    // Binary search:

    // This is the recursive call, since we keep updating low and high. 
    while(low <= high){

        mid = low + (Math.floor((high-low)/2))
        
        // Unique element is found condition:
        // Also condition for exiting the recursion. 
        if(nums[mid] !== nums[mid-1] && nums[mid] !== nums[mid+1]){
            return nums[mid] 
        }

        if(((mid % 2 === 0) && nums[mid] === nums[mid+1]) || ((mid%2 !==0 && nums[mid] === nums[mid-1]))){
            // go right 
            low = mid + 1 
    }
        else{
            // Go left:
            high = mid - 1 
        }
}

        return - 1 ; // No answer 

}

console.log(binarySearchUniqueElement([1,1,2,3,3,4,4,5,5]))

// Time compleixty: O(logn), binary search.
// Space: O(1), no extra memory used. 