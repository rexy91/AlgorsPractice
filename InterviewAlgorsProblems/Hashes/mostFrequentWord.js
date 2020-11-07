/* Given array of strings, find the most occuring, if there is tie, return the one that is larger by lexoicolly order.

input: ['apple','banana','apple','tea']
output: apple, count = 2

*/

// Using Hash:

let findMostfreWord = (array) => {
    
    let hash = {}
    for (let word of array){
        if(hash[word] === undefined){
            hash[word] = 1
        }
        else{
            hash[word] += 1
        }
    }

    // Now iterate thru the hash and get the key with the largest value.

    let keys = []
    let value = 0

    for(word in hash){
        // If key's value larger than value, set value to be that key;s value, and key to be that key.
        /*Ex:
            {
                'apple':2,
                'tea':1,
                'banana':1,
                'orange':2 
            }
            AFter the loop, value = 2, keys =  [apple,orange] 
            Then we compare apple with orange and returns the larger one. 
        */

        if(hash[word] >= value){ //In case there is a tie. two words with the same occruances. 
            value = hash[word]
            keys.push(word)
        }

    }
        // We then need to find the max of the keys array.
        let largestLexoillyOrderWord = keys[0]
        for (let key of keys){
            if (key > largestLexoillyOrderWord){
                 largestLexoillyOrderWord = key
            }
        }

        return largestLexoillyOrderWord
}

console.log(findMostfreWord(['apple','banana','apple','tea','orange','orange'] // Expect orange !!! 
))

console.log(findMostfreWord(['apple','banana','apple','tea','orange','orange','thisislargestword','thisislargestword','thisislargestword']))
// Expect thisislargestword 