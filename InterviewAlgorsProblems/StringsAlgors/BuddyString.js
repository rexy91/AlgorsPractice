/* 
Given two string, return true if can turn first string into 2nd string by swapping at most two characters.
* You can only swap two letters. One operation.

Input ab, ba
output true

Input aaaabc, aaaacb
Swapped c and => aaaacb
True

ab
ab
False

Solution:
分类 input into three types:
1. Different string length => false
2. Same Strings => True if there exist duplicate chars
                => Ex: A = aa B = aa
                => We can swap A[0] with A[1] => aaa equals to B

                => False if there is no duplicate chars
                => Ex: A = abc B = abc
                => We can't swap anything to make A equal to B. 

3. Different Strings 
                => True, if positions can be swapped. 
*/

let buddyString = (stringA, stringB) => {

}