// Reverse Integer
// Reverse the ordering of given number(including negative numbers).
// Examples:
// reverseInteger(125) === 521
// reverseInteger(-420) === -24

// Convert the number into a string, split characters into an array, reverse the array, join the characters in the array, 
// then convert it back into a number. Use a ternary operator to check if the original number is a negative.
// If it is, multiple by negative one and return the value.

function reverseInteger(n) {

    let revNum = parseInt( String(n).split("").reverse().join(""));
    return n >= 0 ?  revNum : revNum *-1;
   }
   
console.log(typeof(reverseInteger(-24)))
