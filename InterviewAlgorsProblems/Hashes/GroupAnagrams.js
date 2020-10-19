/* Given an array of string strs, group the anagrams together. You can return the answer in any order.
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Can assume all strings are in lower case.
/* solution using hash.

Time: O(n * wlogw) , looping once times sort()
Space: O(1), because hash may only contain 26 letters at most. 

Create empth hash, loop thru every element, if element.sorted() === any esixting key.sorted(), just add element to that group.
Other wise, create a key of that element, and value to be that element as well.

input = [['eat','tea','tan','ate','nat','bat']]
output = [
    ['ate','eat','tea'],
    ['nat','tan'],
    ['bat']
] */

let groupAnagram1 = (stringsArray) => {

        let hash = {}
            for (let i=0; i<stringsArray.length; i++){
                let currentString = stringsArray[i]
                let sortedKey = currentString.split('').sort().join('');
        // If key of sorted string does not exist, create the sorted array as key, and unsorted to be the value
        // Element = 'ate' , does not exist in hash: => 
        // 'aet': 'ate'
                if(!hash[sortedKey]){
                    hash[sortedKey] = [currentString]
                }
        // If it does exist, meaning the current string 's sorted version is one of the key, just add this element to that group.
        // Element = 'tea', sorted = 'aet', 'aet' exist , so hash => {'aet': 'ate', 'tea'}
                else{
                    hash[sortedKey].push(currentString)
                }
            }
        // Return the hash's values:
                return Object.values(hash)

}

console.log(groupAnagram1(['eat','tea','tan','ate','nat','bat']))

// WIthout hash
/*
Ex1:
input: strs = ['eat','tea','tan','ate','nat','bat']
output: [['bat'], ['nat','tan'], ['ate','eat','tea']]

Ex2:
Input strs= ['']
output: [['']]

Ex3:
input: strs=['a']
output: [['a']]

Approach:
Loop thru strings array, see which one is a anagram of another by comparing sorted string, and group them.
*/
// let groupAnagram = (stringsArray) => {
//     let results = []
//     if (stringsArray.length === 0 ) return false

//     for (let i=0; i<stringsArray.length; i++){
//         console.log(results)
//         let subarray = []
//         subarray.push(stringsArray[i])

//         // check 'eat' is a anagram of what combination inside the array.
//         // Need a nested for loop
//         // It is allowed to compared with itself, so start with index 0 for inner loop too. 
//         for (let j= i; j<stringsArray.length; j++){

//             // Split the string ,sort, and join back as a string to be compared. 
//             if(stringsArray[i].split('').sort().join('') === stringsArray[j].split('').sort().join('')){
//                     subarray.push(stringsArray[j])

//             }

//         }
//         results.push(subarray)
        
//         // console.log(subarray)
//         // console.log(subarray)
//         // let uniqueSubarray = [] 
//         // subarray.forEach(element => {
//         //     if(!uniqueSubarray.includes(element)){
//         //         uniqueSubarray.push(element)
//         //     }
//         // })
//         // results.push(subarray)

//     }
//     // console.log(results)
// }















