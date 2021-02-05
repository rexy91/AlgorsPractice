/*
input: 'hello', 'o'
output: hell'
*/


let removeCharInGivenstring = (str,target) => {
    
    return str.split('').filter(char => char !== target).join('')

}   
