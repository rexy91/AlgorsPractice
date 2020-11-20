// Find a duplicate number in an array of integers
// const arr = [1,2,3,4,5,6,7,7,8,6,10];
// return 7

// Time Complexity: O(n), depends on size of the array comparsions. 
// Sort the array then compare adjcent. 

let findDuplicateNum = (array) =>{
    // Declare a result array, loop thru the sorted array, if next element equal to current, push next element into result array.
    let resultsArray = new Array
    // If we want unique answers. 
    let uniqueResultsArray = new Array 
    let sorted = array.sort( (a,b) => a-b)
    for(i=0; i<array.length; i++){   // N   
        if(sorted[i] === sorted[i+1]){   // Constant  
            resultsArray.push(sorted[i+1])  // Constant 
        }
        // If mulplite duplicates, we need to remove duplicate ansers inside result array.
        // Unique answer:
        // Remove duplicates:
        // If new array doesn't include the number, then push the number. 
    }

    // Number here is index, not the actual element. 
    for(number in resultsArray){    // N 
        if(!uniqueResultsArray.includes(resultsArray[number])){  // Constant 
            uniqueResultsArray.push(resultsArray[number])  // Constant 
        }
    }
    console.log(resultsArray)

    // Mulptile duplicates, we want unique ones. 
    console.log(uniqueResultsArray)

} 
// One dupliate:
// findDuplicateNum([1,2,3,4,5,6,7,7,6,10])
findDuplicateNum([5,7,5,10,2,3,1,5])

// Time complexity: 
// Sequential: two seperate for loop, so =>  n + n = O(n) 
// Space complexity? 



// Solution 2, use hash , increment by 1 whenever a number is seen. then loop thru the hash to return numbers key that have more than 1 value.(value = occurances of each number)
// time completiy, two sequential for loop. O(n)

let findDuplicateNum2 = (array) => {
    let hash = {}
    let result = []
    for(let i=0; i<array.length; i++){
        
        if (hash[array[i]] === undefined){
            hash[array[i]] = 1
        }
        else{
            hash[array[i]] += 1
        }
    }

    for(number in hash){
        if(hash[number] !== 1){
            result.push(parseInt(number))
        }
    }
    return result
}

console.log(findDuplicateNum2([1,1,2,3,3]))
