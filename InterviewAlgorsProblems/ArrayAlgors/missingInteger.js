// Find the missing number given integer array of 1 to 100


// Time Complexity: two sequial for loop => n + n => 2n => O(n) 
// Space Complexity: need to push n elements into new array. => O(n)  

let findMissingNumbersInArray = (array)  => {
    // Create a new array
    let nums = new Array
    let results = new Array 
    for (let i=1; i<=100; i++){
        nums.push(i) // Push 1-100 to the array
    }
    console.log(nums)

    for (let element of nums){
        // If its not included in the passed in array, its a missing number.
        if (!array.includes(element)){
            results.push(element)
        }
    }
    return results

}

console.log(findMissingNumbersInArray([1,5,99,4,2,3,100])) 
