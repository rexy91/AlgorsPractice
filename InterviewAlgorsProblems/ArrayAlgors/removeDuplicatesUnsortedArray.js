//1. Sort the array, remove duplicates, with O(n) extra space.
//2. With constant space, still need to sort the array. 
//3. Using hashing.

// Sort the array, remove duplicates.
// Declare a temp array, loop thru the sorted array, if sortedarray[i] !== sortedarray[i+1], means no the same, we can add the first one to the temp array,
// If its the same, we move on to the next element, do nothing, because it means the next element eventually will be comparing to a different elemnt,
// We only add to temp if its not the same.

/*
Example: [1,1,2,2,2,3]
temp = []
We only iterate array.lentgh - 1 times, so the last one won't compare with out of bound.
If we iterate array.length times in single for loop (not nested), then array[5] will compare with array[5-1] which is out of bound.

for (let i=0; i< array.length -1; i++) // array.length - 1 = 6-1 = 5, so we iterate 5 times.
1st Iteration: sorted[0] === sorted[0+1], 1 and 1 is the same, do nothing.
2nd iteration: sorted[1] !== sorted[1+1], 1 and 2 is not the same, add one the the array. Becausd now its unique, because array is sorted, so the first time when a elmeent compare with the next is not the same, means its unique.
3rd iteration: sorted[2] === sorted[2+1], 2 and 2 is the same, do nothing
4th iteration: sorted[3] === sorted[3+1], 2 and 2 is the same, do nothing.
5th iteration: sorted[4] !== sorted[4+1], 2 and 3 is not the same, add 2 to the temp.
Not 3 is left, which is the last element, we need to add that to the temp too.

*/

let removeDups1 = (array) => {
    let sorted = array.sort( (a,b) => a-b)
    let temp = []

    for (let i=0; i<array.length -1; i++){
        if (sorted[i] !== sorted[i+1]) // Means all the duplicate have been compared, this is the last dupcicate, thats why its not equal to the next element.
            temp.push(sorted[i])
    }

    // Last element is always left, we need to add it, because we didnt compare it cuz of out of bound.
    // If [1,2,2], when 2 compares with 2, not the same, nothing gets added, so last element is 2 needs to be added.
    // If [1,2,3], when 2 compares with 2, 2 is added to the temp, but 3 still not gets added, we need to add.

    temp.push(sorted[array.length-1])
    return temp
}

// Runtime: O(nlogn) because of the sort method. 
// Space: O(n), because temp array an take up to n elements.

console.log(removeDups1([5,4,3,3,3,1,1,0,0,2,100,-5,-5,-10,-100,1555,1555]))
console.log(removeDups1([1, 2, 2, 3, 4, 4, 4, 5, 5]))
console.log(removeDups1([2, 2, 2, 2, 2, 2, 2, 2, 2]))


/*
2. Constant space. 
Two pointers method, fast and slow pointer. Time: O(n * nlogn(sort)), space: O(1) since we are only modifyin the original array. 
We are only modifying the original array, no extra space or axuiliy(辅助) data structure

input: [3,2,2,1,3,2,6] 
Initialize pointer i
Initialize pointer j => This will be the fast pointer. Use to iterate and compare with i
This is not the same as nested for loop, this is comparing 3 with the rest numbers, if i increment, will compare i with the rest numbers.
Not each number with all the rest numbers. 

// the variable inside the for loop is the fast pointer.
for (let j=0; j<array.length; j++)

1st Iteration:
i = 0
j = 0


*/

let removeDups2 = (array) => {
    let sorted = array.sort((a,b) => a - b )

    let i = 0 // slow pointer
    // J is fast pointer. 
    for (let j=0; j<sorted.length; j++){
        // If both element is the same, do nothing, move the fast pointer. In our case will be j in the for loop 
        // If not the same, we do something.
        if(sorted[j] !== sorted[i]){
            //If not the same, move i pointer up by one, and modifty value to be sorted[j] , current j pointer.
            //Idea is to have make the element unique for each index, to take away repearted ones. Ex [1,2,2,3], need to move 3 to the left to replace the extra 2.
            i++
            sorted[i] = sorted[j]
        } 
    }

    // When the for loop is done, i's position will be returned. It will also indicates how many unique elements there are. 
    // i will indicate the unique array 's ending index. So we need another loop if we want to print it.
    // Because the size of the original array doens't change.
    // Ex: [1,1,1,3,3,4,4,5] => [1,3,4,5,3,4,4,5] , i will be pointing at index 3. Which is [1,3,4,5] is the unique !!!! 
    
    // Print it 
    let returnIndex = i // this is the amount of elements need to be return. if 0 => meaning only index 0 need to be return [2,2,2,2] => 0 => [2] bieng the only unique, cuz i never gets incremented. 
    let results = []
    for (let k=0; k<=returnIndex; k++){
        results.push(sorted[i])
    }
    return results
}
console.log(removeDups2([5,4,4,3,3,1,1,1]),'tis') //outpout => [1,3,4,5] for array, or 3 for index bound. 
console.log(removeDups2([2,2,2,2,2,2,2,2])) //i will be zero, since i never gets incremented, so return index bound 0 => [2]


// Solution 3, removing duplicate using hash.
/*
Time Compliexity: O(n) , looping thru the array
Space compleixty: O(n), hash might contain n elements.

Approach:
Loop thru the array, if element is already seen as a key, increment its value by one.
If its first time being seen, create key with value one.
So every time a repeated element is being visited, it will not be created as another key.
So all the keys will beunique after the loop. !!!!

*/
let removeDups3 = (array) => {
    
    let hash = {}
    for (let i=0 ;i<array.length; i++){

        if(hash[array[i]] === undefined){
                hash[array[i]] = 1 
        }
        else{
            hash[array[i]] += 1 
        }
    }

    // Loop thru hash, the keys will be the unique elements in the array !!!
    // Object.keys(hash) return strings, append them to the array, with parseInt 
    
    let results = [] 
    Object.keys(hash).forEach(element => {
        results.push(parseInt(element))
    })

    return results 
}

console.log(removeDups3([5,5,10,17,10,2,2,0]))
console.log(removeDups3([2,2,2,2,2,2,2,2,2,2]))
