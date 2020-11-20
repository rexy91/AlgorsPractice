/* Given a sentence text (A sentence is string of space-separated word):
- first letter is in upper case
- each word in text are separated by a single space.

- Rearrange by numbers of letters, if same , rearrange by original order.
Example1:
input text = 'Leetcode is cool'
Output = 'Is cool leetcode'

example2:
input text = 'Keep calm and code on'
Output = 'On and keep calm code'
*/


//Solution1: Turn the string into array, seperate by space, 
// Sort the array by length.
// Join back to string and capitailize the first letter. 

// Time: O(nlogn)
// Space: O(n + n) , needed array and result which may contains n elements.  

const rearrangeWords = (string) => {
    let array = string.toLowerCase().split(' ')
    // Sort the array by length of each word.
    let result = array.sort((a,b)=> a.length - b.length || a-b).join(' ')

    return result.charAt(0).toUpperCase() + result.slice(1)

}

console.log(rearrangeWords('Leetcode is cool'))

