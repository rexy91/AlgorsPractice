// Two sum:
// Given an array of intergers, 


// Solution1, hash map/dictionary.
// Only need to go thru the array once. Time complexity will be O(n)

let twoSum = (array,target) => {

    // Declare a hash
    // Declare results array, incase there is more than one solution. On leetcode problem there is only one solution.
    let hash = {}
    let results = []

    // Loop thru elements 
    for (let i=0; i<array.length; i++){
        // Check sum-element
        let SumMinusElement = target - array[i] 

        // Check if this number exist in the hash, if it does, then this number with the current num will be a solution pair.
        // Example, if target is 10, current element is 3, and if (10-3=7) 7 already exsts in the has, [7,3] will be a solution, just return their indexs.
//* If SumMinusElement doesnt exist in the hash, no solution, ADD THE CURRENT ELEMNT and its index into the  hash, because the next element + this element might be the solution.
                                                //return the two index that are solution pairs.
        if (hash[SumMinusElement] !== undefined) {results.push([i, hash[SumMinusElement]])} // If it exist, this statement is executed.

        // If it doesn't exist, we push the current element and it's index to the hash, to be used in next loop.
        // Even if it exist, we still execute the folloiwng statement.
        hash[array[i]] = i
        // console.log('iteration: ' + (i+1), 'hash:' + Object.keys(hash))
        
    }
    
     // When the loop is finished, return the results array. 

     return results
}

console.log(twoSum([3,5,2,4,8,11],7))

// Process: 
// Our hash will contain SumMinusElement as key, and index of it to be the value pairs.

// We count iteration from 0, not 1 here !!!!!

/* 0Th iteration, i=0, element=3, SumMinusElement = 7-3=4 
Current hash is empty:
hash={

}
4 is undefined, so we add currelemt and its index into the hash. => 
hash:={
    '3':0
}

1st Iteration, i=1 element=5 SumMinusElement = 7-5 = 2
Now check if 2 is inside the hash, if yes, then 2+current = 2+5 = 7, we got a pair.
Current Hash:
hash={
    '3':0
}
Does not contain 2, so we move on and add element 5 and index into the hash.
hash={
    '3':0,
    '5':1
}

2rd Iteration, i=2 element=2 SumMinusElement = 7-2 = 5 
Current Hash:
hash={
    '3':0,
    '5':1
}
5 Does exist, so 5 + current = target 7, we got a solution. Push that to the result array, and move on. We still add current elemtent and index into the hash.
result = [i, hash[SumMinusElement]] = > [2,1] // Indices

Hash After 2rd iteration: (means after 3 element is loop, hash should have 3 keys)
hash={
    '3':0,
    '5':1,
    '2':2
}

3rd Iteration, i=3 element=4 SumMinusElement = 7-4 = 3
Current Hash:
hash={
    '3':0,
    '5':1,
    '2':2,
}
3 is there , so result.push([i, hash[3]]) => [3,0] , add element 4 and index 3 into the hash
Hash after 3rd iteration:
hash={
    '3':0,
    '5':1,
    '2':2,
    '4',3
}

4th Itertion, i=4, element = 8, SumMinusElement = 7-8 = -1 , not there , add current to hash.
Hash after 4th iteration:
hash={
    '3':0,
    '5':1,
    '2':2,
    '4':3,
    '8':4
}

5th iteration, i=5, elemnt = 11 , SumMinusElement = 7-11 = -4 , -4 is not in the hash, add current and index to hash.
Hash after 5th iteration:
hash={
    '3':0,
    '5':1,
    '2':2,
    '4':3,
    '8':4,
    '11':5
}

Loop is done, final hash:
hash={
    '3':0,
    '5':1,
    '2':2,
    '4':3,
    '8':4,
    '11':5
}
Final results array : [[ 2, 1 ], [ 3, 0 ]]
*/


// Solution 2:
// Nested for loop, time = O{n*n} => O(n^2)

let array = [2,3,4,10,5,7]
let target = 12 
//Expected output= [[0,3], [4,5]] Indices

let twoSumSolution2 = (array,target) => {
    let results = new Array 

for (let i=0; i<array.length; i++){
    // Becase we want j to start one element after i, to be compared, since I cannot compare with itself.
    for(let j=i+1; j<array.length; j++){

        if(array[i] + array[j] === target){
            results.push([i,j])
        }
    }
}
return results // This needs to be outside of both for loop, because we can have more than one solution. We need two for loop to completed.

}

console.log(twoSumSolution2(array,target))
