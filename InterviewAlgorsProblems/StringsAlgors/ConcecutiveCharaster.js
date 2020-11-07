/*
Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.
Return the power of the string
* Maximum length of a substring that contain one unique character. 

Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.

Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.


Approach:
Initialized previous character = ' '
initialize count , it keeps track of the length of the substring.
Loop thru the string, if character is the same as the previous character, increment count by 1, if not reset count, then start with the next character.
Finally, return max count.

*/



let findPowerOfString = (string) => {
    let previous = ' '
    let results = []
    let count = 0

    for(let char of string){
        if(char === previous){ // First letter this will always be false.
            count++ 
        }
        // Once there is no match, we update previous letter to be current! Ex: leetc, once 2nd e with t is no match, we update previous = current, so it can be compare with c. 
        // If they are not equal, we update previous to be current letter, and start coparing next one to it.
        // Also reset count to be 1, because at this point the longest same char substring length is just one, since no match yet.
        else{
            results.push(count)
            count = 1
            previous = char
        }
    }
    console.log(results)
    let max = results[0]
    for (let element of results){
        if(element > max){
            max = element
        }
    }
    return max 
}

console.log(findPowerOfString('leetcode')) // output 2, 'ee'
console.log(findPowerOfString('aacbdaaaabcczzzzzz')) //output 6, 'cccccc'