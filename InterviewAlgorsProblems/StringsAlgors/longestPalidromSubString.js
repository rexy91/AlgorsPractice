// Given string str, find the longest substring that is palindromic.

/*
input s = 'babad'
output: 'bad', or 'aba'

input s = 'cbbd'
output: 'bb'

input s = 'a'
output: 'a'

input s = 'ac'
ouptut = 'a'
*/

// Solve by brute force => O(n^2) , N^2 to get all substrings, and multiply by n for checking if each substring is palidrome.

let findLongestPaliSubstring = (str) => {
    // First get all substrings
    let allSubStrs = []
    let results = []
    for (let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length + 1; j++){
            allSubStrs.push(str.slice(i,j))
        }
    }

    for (str of allSubStrs){
                // Because str is a string, we need to convert str back to string after reversing it as an array. 
        if(str.toLowerCase().split('').reverse().join('') === str.toLowerCase()){
                results.push(str)
        }
    }

    // Now result contains all palidromic substrings, we need to find the longest one.

    let longestAnswer = results[0]
    
    for (palidromicSub of results){
        if(palidromicSub.length > longestAnswer.length){
            longestAnswer = palidromicSub
        }
    }
    return longestAnswer
}

console.log(findLongestPaliSubstring('aaracecarbnb'))

//SOlution 1 done, time Complixity of above solution: O(n^2) nested loop to find all substrings. 
// for loop to check if each substring is a palidrome. => O(n)
// sequial for loop to get lartest answer => O(n)
// Total: O(n^2) * n+n => O(n^2 * n) => O(n^3) . 


// Longest palidrome  