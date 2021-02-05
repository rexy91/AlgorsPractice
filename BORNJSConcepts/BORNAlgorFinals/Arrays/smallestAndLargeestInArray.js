/*
input: [1,6,10,100,200]
output: smallest:1, largest:200

If sort it and return first and last index, will take O(nlogn) for sorting, then constant for getting the element.

However, O(n) is faster than O(nlogn)
So looping thru the array and updating min and max will be faster.

*/


let findMinMaxArray = (array) => {
    let min = array[0]
    let max = array[0]

    for(let num of array){
        if(num < min){
            min = num
        }
        else if(num > max){
            max = num
        }
    }
    return ([min,max])
}

console.log(findMinMaxArray([0,-300,6,10,500,200])) // -300, 500 