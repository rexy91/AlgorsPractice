// vowels = ['a','e','i','o','u']
// consonants are the rest letters


// time: O(n) 
// Space: O(1) , no extra data structure auxliries, just assignments.
let countVowelsAndConsonants = (string) => {
    let vowels = ['a','e','i','o','u']
    let vowelsCount = 0
    let consonantCount = 0

    for (let char of string){
        if(vowels.includes(char)){
            vowelsCount +=1
        }
        else{
            consonantCount += 1
        }
    }

    return `Vowels: ${vowelsCount}, Consonsants:${consonantCount}`
} 

console.log(countVowelsAndConsonants('java'))