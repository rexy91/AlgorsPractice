/* Find the intersections of two arrays, (when a number is contained inside both arrays)
   Elements in the reulst should be unique.
   Orders doesn't matter.

   Example 1:
    input array1=[1,5,9,10,4] array2=[5,10,1,2,12]
    output [5,10]

    Time complexity: two seperate for loop, => n + n => O(n)
    Space complexity: we need n extra spaces for set, so O(n)
*/

let findIntersaction = (nums1, nums2) => {
    
    let set1 = new Set()
    // This set will also be our results array. We will convert it to array to be returned.
    let intersactionSet = new Set()

    for (let num of nums1){
        set1.add(num)
    }

    for (num of nums2){
        // If set1 also contains a num inside num2, that is an intersaction, we add to the intersation set.
        if(set1.has(num)){
            intersactionSet.add(num)
        }
    }

    return Array.from(intersactionSet)
}

console.log(findIntersaction([1,5,9,10,4], [5,10,1,2,12])) // Done!!!! 


// Solution2 
// Nested for loop. 

