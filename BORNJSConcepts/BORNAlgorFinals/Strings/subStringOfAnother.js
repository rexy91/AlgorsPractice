// /*
// Given an array of string words. Return all strings in words which is substring of another word in any order. 

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]

// */


// let subStringOfAnother = (words) => {

//     let results = []

//     if(words.length <= 1){
//         return false
//     }

//     // Nested for loop.
//     // Outer loop picks an word, inner loop starts with 0 every time, so it will check all words against the current outer loop's word.
//     // Except if they are the same, so if i === j, j just increment, because itself doesn't give a valid answer.

//     for (let i=0; i<words.length; i++){
//         for(let j=0; j<words.length; j++){
//             // If words[j] contains words[i]
//             // Ex: When outer word is 'as'
//             // Then when words[j] = 'mass', it does contain 'as'
//             // Then push 'as' to the results.
//             if (i === j){
//                 continue
//             }
//             if(words[j].inclues(words[i])){
//                 results.push(words[i])
//             }
//         }
//     }
//     return results

// }

// console.log(subStringOfAnother(['mass','as','hero','superhero']))

var stringMatching = function(words) {
    let result = [];
    
    for (let i = 0; i < words.length; ++i) {
        for (let j = 0; j < words.length; ++j) {
            if (i === j) {
                continue;
            }
            
            if (words[j].includes(words[i])) {
                result.push(words[i]);
                break;
            }
        }
    }
    
    return result;
};

console.log(stringMatching(['hero','mass','as']))