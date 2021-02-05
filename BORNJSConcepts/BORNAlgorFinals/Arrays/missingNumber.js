/*
find the missiong number in integer array of 1 to 100.


*/

let missingNumber = (nums) => {
    let results = []
    for(let i=1; i<=100; i++){
        if(!nums.includes(i)){
            results.push(i)
        }
    }

    return results
}

console.log(missingNumber([1]))

