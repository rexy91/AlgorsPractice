// Remove given character from string.

// Input: 'apple' , p
// Output: 'ale;


let removeCharFromString= (string, givenChar) => {

    for(let char of string){
        if(char === givenChar){
            
            string = string.replace(char, '') // REplace it with empty ''. 
            // .repalce() modifies the origina string, so need to stores it somewhere. 
        }
    }

    return string
}

console.log(removeCharFromString('abcccccde','c'))
console.log(removeCharFromString('apple','p')) //=> ale

