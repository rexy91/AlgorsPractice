// Find duplicate chars of a string.
/*
input = 'hleleobbo ' => output : [l,o]

*/

// Solution 1, using hash.
// Space compaicty: O(n), hash might contain n elements, and results might contain n elements. 
// Time Complixity: O(n) 

let findDupChars1 = (string) => {
    let hash = {}
    let results = []
    for (let i=0; i<string.length; i++){
        if(hash[string[i]] === undefined){
            hash[string[i]] = 1 
        }
        else{
            hash[string[i]] += 1 
        }
    }

    for (char in hash){
        if(hash[char] !== 1) {// means its repeated char
            results.push(char)
        }
    }
    return results
}

console.log(findDupChars1('hleleobbo')) // Done! 


// Solution 2, sort it, and compare, and if i === i+1, i+1 is repeated, push that to the reults. 
// input: hleleobbo , sorted => 'bbeehlloo'
// Time complixity: O(m * nlogn)
// Space Complixity: O(n) 

let findDupChars2 = (string) => {
    let sorted  = string.split('').sort().join('')
    let results = []
    console.log(sorted)
    for(let i=0; i<string.length-1; i++){
        // If its same, meaning i+1 is the repeated one, push that to result array
        if(sorted[i] === sorted[i+1]){
            results.push(sorted[i+1])
        }
    }
    return results // THis will containes mulplite dups, if need unique ones just use a set to return unique array of this version. 
}



console.log(findDupChars2('hleleobbbo'))

// Solution 3, sort it and use fast and slow pointers. 
// Here instead of returning the first N(depends on the slow pointer) elements, we return the rest, because everything after N index is repeated elements.
