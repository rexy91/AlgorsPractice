// Find the missing number given integer array of 1 to 100

// Sort the array
// Set a int count to be 1
// If the current index !== int, its missing. Because for loop 1-100, if no missing number, every index should equal to the actual number, if we count from 1 in the for loop.

let findMissingNumbersInArray = (array)  => {
    
    // Sort the array
    let sorted = array.sort( (a,b) => a - b )
    let results = []

    for (let i=0; i<5; i++){
        if(sorted[i] !== (i+1)){
            results.push((i+1))
        }
    }
    console.log(results)
}

findMissingNumbersInArray([5])