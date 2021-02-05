//input 'Morning'
// output => m

// Time, two seperate for loop: n + n, O(2n) => O(n)
// Space, hash takes n elements, => O(n)

let firstNonRepeatedChar = (str) => {
    let hash = {}

    for (let char of str){
        if(hash[char] !== undefined){
            hash[char] += 1
        }
        else{
            // doesn't exist yet
            hash[char] = 1 
        }
    }

    // Now loop thru the hash, return the first value === 1, that key is the answer.

    for (let key in hash){
        if(hash[key] === 1) {
            return key //Now this will exit the function, beause it is the only return statement !!!
                        // we want to return becaxuse we don't care of any other key that has value 1, we just need the first one.
        }
    }
}

console.log(firstNonRepeatedChar('loveleetcode'))
console.log(firstNonRepeatedChar('morning'))

