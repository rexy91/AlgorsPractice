// Exactly one


// Sorting Solution. 
// Time: O(nlogn)
// Space: O(1) / O(n) 

const findTheDuplicate = (nums) => {
    let sorted = nums.sort((a,b) => a-b )

    // Inside a sorted array, all duplicates will be adjancent,so we can check if nums[i] === nums[i-1] ,if yes, that's a duplicate.
    
    for (let i=0; i<nums.length; i++){
        if(nums[i] === nums[i-1]){
            return nums[i]
        }
    }
}


// Solution using set:
// Time: O(n)
// Space: O(n), worst case, the duplicat element might appear twice, one of that at index n-1, set will contain n-1 distinct value, => O(n)

const findTheDuplicated2 = (nums) => {
    
}