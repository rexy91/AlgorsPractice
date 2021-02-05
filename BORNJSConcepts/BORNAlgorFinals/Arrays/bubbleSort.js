
// input: [10,9,7,2,-100,5,2]
// output: [-100,2,2,5,7,9,10]

let bubbleSort = (nums) => {

    for (let i=0; i<nums.length; i++){
        // J start with i + 1, because no need to compare with nums[i] itself.
        for (let j=i+1; j<nums.length; j++){
            if(nums[i] > nums[j]){
                let temp
                temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
    console.log(nums)
}

console.log(bubbleSort([10,9,7,2,-100,5,2]))
console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1]))