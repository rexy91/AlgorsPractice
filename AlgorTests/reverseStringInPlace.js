// Reverse a string in place.
// input: 'number'
// output: 'rebmun'


let reverseStringInPlace = (str) => {
    let left_pointer = 0
    let right_pointer = str.length - 1 
    let string = str.split('')

    while(left_pointer < right_pointer){
        
        let temp

        temp = string[left_pointer] 
        string[left_pointer] = string[right_pointer]
        string[right_pointer] = temp

        left_pointer++
        right_pointer--
    }
    
    return string.join('')
}

console.log(reverseStringInPlace('number'))


//2. Print duplicate characters from a string?
// Input: 'Java' output: 'a'
// Input: 'helloobbbcc' output: ['l','b','o','c']

let printDuplicatesCharsString = (string) => {
    
}
