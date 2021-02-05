/*
input: [10,5,3,4,3,5,6]
output: 5
*/

// Cannot use hash, because numbers as keys in hash, will be sorted by default.
// So 3 will come before 5 inside the hash. 
// But 5 should be the first element that is repeating, not 3.


/*
Navtive solution O(n^2)
Two loops, outer loop picks an element, inner loops check if any other element is the same, if yes then we just break the code and return the element.
*/

/*
 Hash solution, but we need to loop thru array from the back, to find first repeating.
 Because we need to make sure we have checked all the back before checking the first repeating one.
 Declared min-index to be array.length-1(last elemenet), loop from back, if element is already inside hash update index to be that element.
 Other wise just add element inside hash.

 // If we want the last repeating element, we will loop from the front 
 input [10,5,3,4,3,5,6]
 min-index = array.length - 1 => element 6
 6 is not inside hash, insert 6 to hash
 5 is not inside hash, insert 5 to hash
 3 is not inside hash, insert 3 to hash
 4 is not inside hash, insert 4 to hash
 3 is inside hash, update min-index = i, which is 2, with element 3 
 5 is already seen in hash, so now update min-index to be 1, => element 5.

 Done, so 5 is the first repeating element. 
 Going from the back will make sure we neglect any repeating element from the back, so last one gets updated is the first repeating one.!!

*/

let firstRepeatingElement = (nums) => {
    let hash = {}
    let index = nums.length-1
    for (let i=nums.length-1; i>=0; i--){
        if(hash[nums[i]] !== undefined){
            index = i
        }
        else{
            hash[nums[i]] = 1
        }
    }

    return nums[index]
}

console.log(firstRepeatingElement([3,5,4,7,5,4]))