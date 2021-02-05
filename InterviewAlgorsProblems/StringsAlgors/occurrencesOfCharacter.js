/* Count the occurrence of a given character in a string
input: count the occurrences of character 'a' on String: 'Today is Monday'
output: 2 

*/


let countOccurencesOfChar = (character,string) => {
    let count = 0 
    for (letter of string){
        if(letter.toLowerCase() === character.toLowerCase()){
            count++
        }
    }

    return count
}   

console.log(countOccurencesOfChar('a', 'Today is MondAy')) // => 2
console.log(countOccurencesOfChar('a', 'aaaAAAa)')) // => 7
