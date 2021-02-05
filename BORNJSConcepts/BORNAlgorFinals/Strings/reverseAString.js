// Reserve with for loop, extra array

let reverseStringForLoop = (str) => {
    let array = []
    for (let i=str.length-1; i>=0; i--){
        array.push(str[i])
    }

    return array.join('')
}

console.log(reverseStringForLoop('hello'))


// Reverse in place: 
// cannot modify string, so convert to array then use two pointer methods.

//Time: O(n), might need to swap n elements, converting the str to array is also O(n), seperated O(n) => O(n)
//Space: O(1), this is inplace. 
//
let reverseStringInPlace = (str) => {
    let array = str.split('')
    let left = 0
    let right = str.length-1

    while(left < right){
        let temp = array[left]
        array[left] = array[right]
        array[right] = temp
        right--;
        left++;
    }
    // joins back to a string
    return array.join('')
}

console.log(reverseStringInPlace('hello'))