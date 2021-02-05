/*
input: 'programming'
output: 'progamin'

*/

// Using set:
// Time: O(n)
// Space: O(n)

let removeDuplicatedString= (str) => {
    let set = new Set()

    for(let char of str){
        set.add(char)
    }
    
    return set
}

console.log(removeDuplicatedString('programming'))

// Sort it , and compare adjecent.
// programming => 'aggimmnoprr'

let removeDuplicatedStringSortingMethod = (str) => {
    let sorted = str.split('').sort()
    let result_array = []

    for(let i=0; i<str.length -1; i++){
        if(sorted[i] !== sorted[i+1]){
            result_array.push(sorted[i])
        }
        //Else just continue the iteration.
    }
    result_array.push(sorted[sorted.length-1])

    console.log(result_array)
    
}


console.log(removeDuplicatedStringSortingMethod('programming'))
console.log(removeDuplicatedStringSortingMethod('loveleetcode'))