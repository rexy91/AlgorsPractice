// Find a duplicate number in an array of integers
// const arr = [1,2,3,4,5,6,7,7,8,6,10];
// return 7

// Time Complexity: O(n), depends on size of the array comparsions. 

let findDuplicateNum = (array) =>{
    // Declare a result array, loop thru the given array, if next element equal to current, push next element into result array.
    let resultsArray = new Array
    let uniqueResultsArray = new Array 

    for(i=0; i<array.length; i++){   // N   
        if(array[i] === array[i+1]){   // Constant  
            resultsArray.push(array[i+1])  // Constant 
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
findDuplicateNum([1,2,3,4,5,6,7,7,6,10])

// Mulpitale dupliates
findDuplicateNum([1,2,3,4,5,6,7,7,6,6,6,6,6,6,10,10,10])


// Time complexity: 
// Sequential: two seperate for loop, so =>  n + n = O(n) 
// Space complexity? 
