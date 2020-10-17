// 3. Palindromes
// Return true if the given string is a palindrome.
// Examples:
// palindrome(“racecar”) === true
// palindrome(“waking up early is awesome”) === false

let checkPalindromes1 = (string) => {
    // Reverse the string.
    // Compare original string to the reversed string.
    // If they are equal, string is palidrome. 

        // Convert to lowercase, convert to array, revese it, then join back to string.
    let reversed = string.toLowerCase().split('').reverse().join('') // 
    
    if(string.toLowerCase() === reversed) console.log('It is palidrome')
    else console.log('Not palidrome')

}
checkPalindromes1('racecar')
checkPalindromes1('aaacaaab')




// SOlution2,
// Loop thru the array, comapre the first character with the last(with the reflection)
// TIme complexity => O(n) 

let checkPalindromes2 = (string) => {

    for(let i=0; i<string.length; i++){  // N complexity  

        // Regular expression,when letter is palidromes but you have extra spaces and symbols, to remove everything except for a character.
          string = string.replace(/\W/g, '')
          console.log(string)
        // In case string has length of odd number, so it can compare with itself. 
        if(string[i].toLowerCase() !== string[string.length - 1 - i].toLowerCase()){  //constant , because using string[index]
           return false
        }

        // If all for loop pass, means every char is checked. 
        return true
    }
}

console.log(checkPalindromes2('racecar'))
console.log(checkPalindromes2('aba'))
console.log(checkPalindromes2('I did, did I?'))
console.log(checkPalindromes2("race a car"))