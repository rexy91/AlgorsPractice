// Find all possible substrings of a given string.
// Takes O(n^2) run time. 

// Outer for loop for each char, inner for loop for combining that char with the rest of the chars.

let getAllSubstrings = (str) => {
    let i, j, result = [];
  
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length+1; j++) {
            result.push(str.slice(i, j)); // str = 'abc', slice(0,1) => 'a' slice(0,2) => 'ab' slice(0,3) => 'abc'
        }
    }
    return result;
  }
  
  /*
  'abc'
  1st Outer iteration:
        inner runs 2 times, for b and c
  i = 0
  j = 1
  str.slice(0,1) => 'a' , its exlcusive, from 0 to 1, not including 1. But includes 0. 

  i = 0
  j = 2
  str.slice(0,2) => 'ab'

  i = 0 
  j = 3
  str.slice(0.3) => 'abc' 

  2nd outer:
  i = 1
  j = 2 
  str.slice(1,2) => 'b' 
  etc ....
  Works for sub arrays too.!!! 

   */
  var theString = 'abc';
  console.log(getAllSubstrings(theString));
  