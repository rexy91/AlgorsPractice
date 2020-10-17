// Find the largest and smallest number in array
// const arr = [1, 2, 3, 4, 100];
// => min:1, max:100

// Solution1:
// Sort the Array, return first and last Element
// Time complixity: depends on the sorting, in this car array.sort() is O(nlogn) 

let findMinMaxSolution1 = (array) => {
    let sortedArray = array.sort()  // nlogn 
    let min = array[0]
    // JS doenst have index of -1
    // Last index will be array.length - 1
    let max = array[array.length -1 ]

    return {
        min,
        max
    }
}

console.log(findMinMaxSolution1([10,2,100,500,1]))


//Solution2:
// Set first number to be min and max, and loop thru each Element and compare
// time complixity => O(n)

let findMinMaxSolution2 = (array) => {
    let min = array[0]
    let max = array[0]

    for(i in array){  // O(n)
         
        if(array[i] < min){
            min = array[i]
        }
        if(array[i] > max){
            max = array[i]
        }

    }

    return {
        min,
        max
    }
}

console.log(findMinMaxSolution2([10,2,100,500,1,50000,-100]))