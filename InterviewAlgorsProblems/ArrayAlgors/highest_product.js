// Given an array_of_ints, find the highest_product you can get from three of the integers.
// [1,2,3,4,5,6] => 4*5*6 = 120

// Solution, sort the array, get the product of the last 3 ints.

// Edge case, if array contains netagive numbers, then the first two in the sorted array might be greated than the 倒数 第二第三个
// Because two negative product = positive

// Example: [-1000, -900, 1, 2, 500] , so now the 2nd possible largest product will be -1000 * -900 * 500
// So we compare the two possible result and return the larger one.

// Time complexity:
// array.sort() takes nlogn .
    
let findHighestProduct = (array) => {
    let sorted = array.sort((a,b)=> a - b)  // nlogn 

    // Get the last three
    // And get their product
    let product1 = 1 
    // Alwasy looping three times, so its constant here. 

    for (let i=array.length-1; i>=array.length-3; i--){  
            product1 *= sorted[i]  // Constant 
    } 
 
    // Get the first two, and the last , and their product. (In case of negative numbers)
    
    let product2 = sorted[0] * sorted[1] * sorted[array.length-1]

    if (product1 > product2) return product1
    else return product2
}

console.log((findHighestProduct([1,100,100,5,15,20])))
console.log(findHighestProduct([-8,-4,3,2,10]))  // Expected output 320 (-8 * -4 * 10) , in this case its not the last three.


// Time complexity: O(nlogn) , all others are just contant or can be neglect. 