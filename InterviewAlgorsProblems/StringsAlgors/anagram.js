// 1. Check if strings are anagram:
// Example:
// anagram(“IAmLordVoldemort”, “TomMarvoloRiddle”) === True
// One string that is formed from antoher string, case sensitive.

// Solution 1: 
// Loop thru phase, check if each letter is included inside string.
// Tim complexity will be => N * N (a linear search inside a foor loop) => O(N^2) 
function checkAnagram1(phase, string){
      
    for(i=0; i<phase.length; i++){ // N 

            // If case not sensitive, then conver to uppercase/both for both string. 
        if(string.toUpperCase().includes(phase[i].toUpperCase())){  // It is a linear search, so N 

        }
        else{
            console.log('failed')
            return false 
        }
    }
        console.log('It is Anagram!')
        return true 
}
checkAnagram1('Dormitory', 'Dirtyroom')
checkAnagram1('Conversation','voicesranton')

// Solution 2:
// Convert to array and sort it, and compare if they are true, O(nlogn)
// Time complexity O(nlogn)

let checkAnagram2 = (phase, string) => {   
    // Split to array, sort, join back to string.
    
    if(phase.toLowerCase().split('').sort().join('') === string.toLowerCase().split('').sort().join('')) console.log('Anagram too !')
    else return 'Not Anagram!'
}
checkAnagram2('Dormitory', 'Dirtyroom')
checkAnagram2('Conversation','voicesranton')

