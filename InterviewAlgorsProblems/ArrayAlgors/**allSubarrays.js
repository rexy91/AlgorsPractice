// Find all the subarrays of given array
// Subarray has to be continous!

let testArray = [1,2,3,4,5]

// Navtive solution:
// Nested for loop ,O(n^2)

let findSubarrays1 = (array) => {
    let results = []
    
    for (let i=0; i<array.length; i++){ 
                // j < array.length + 1 because  to slice, last element to sliced will need the out of bound index.
                // Example: [1,2,3], to slice out 3, we need array.slice(2,3), 3 is out of bound index. 

        for (let j=i+1; j<array.length+1; j++){
            results.push(array.slice(i,j))
        }
    }
    
    
    return results
    
}


console.log(findSubarrays1([1,2,3]))