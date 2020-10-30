// Reverse a string in-place. Meaning no auxiliry data structures and no extra space can be used.

// input: 'beautiful'
// output: 'lufituaeb'

let reverseStringInPlace = (string) => {
    
    let j = string.length - 1
    let array = string.split('')
    let i = 0

    while (i<j){
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        i++
        j-- 
    }

    return array.join('')
}

console.log(reverseStringInPlace('helloo'))
