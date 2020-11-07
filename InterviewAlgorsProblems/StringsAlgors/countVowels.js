// Return the count of vowels(aeiou) in the given string.

// Input: 'How many vowels in this string?  => o,a,o,e,i,i,i => 7


let findVowels = (string) => {
    let count = 0
    let hash = {
        'a':1,
        'e':1,
        'i':1,
        'o':1,
        'u':1 
    }

    for(let letter of string){

        if(hash[letter.toLowerCase()] !== undefined){
            count++
        }
    }

    return count
}

console.log(findVowels('How many vOlwels in this string?')) // => 7
