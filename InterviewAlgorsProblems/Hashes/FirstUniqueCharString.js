/* Given a string, find the first non-repeating character in it and return its index. If it doesnt exit, return -1

Examples:
s = 'leetcode'
return 0

s = 'loveleetcode'
return 2 => 'v'  */

// Solution with hash map, time compleixity: two seperate for loop, so n + n = O(n)
                        // Space complexity: O{1} , because only 26 letters we need to create for the hash. 
                        
let firstUniqueChar = (string) => {
    let hash = {} 

    // Loop thru the string, if letter is a key, increment value by 1, if not, create key with value 1(occruance)

    for (let letter of string){
        if(hash[letter]){
            hash[letter] += 1 
        }
 
        else{ // This else is crucial, otherwise will always gets reset to 1.

        hash[letter] = 1 }
    }

        // Now just loop thru the hash, return the first letter with value 1. (This is the first non-repeating character)
        // Exit the function once we find the first one. That's all we need. 
        for (let letter in hash){
            if(hash[letter] === 1)
                return string.indexOf(letter)    // This will be the return of the whole FUNCTION !!!! Done!!!          
                                                 // Return its index instead of the actual letter.
        }

            // We need to return -1 if it dosnt exist.
            // If it comes to this line, means we didnt find anything that matches. 
        return -1 

}
console.log(firstUniqueChar('loveleetcode'))
console.log(firstUniqueChar('hhbbbcccddazzzjlllk')) // Expected => 10 
console.log(firstUniqueChar(''))


// Solution 2 without hash:
