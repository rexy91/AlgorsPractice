/* 
input 
num1 = [1,2,3,0,0,0], m=3
nums2 = [2,5,6] n=3

nums one will alreayd have lentgh of m + n, with extra spaces initiazed to be 0.

Two pointer method:

SEe Book for explaintation:

both first and 2nd start with end index(excluding 0)(ones that have elements but not 0) to first.
so num1 starts with index at element 3
so num2 starts with index at element 6

for loop i start with last index of num1, including 0.

Compare last number that is not 0 inside num1 with last number in num2: compare 3 with 6
If 3 is larger, nums1[i] = nums1[first]


*/

/*
Process:

num1 = [1,2,8,0,0,0]
num2 = [2,5,6]
Output = [1,2,2,5,6,8] 

for loop starts with last element index in num1 => 0
first_pointer starts with last actual elements in num1, => index 3 => element 8 , actual elemnts lentgh will be given, which is m, so m-1
second_pointer starts with last element index in num2, given n, => n-1 => at element 6

1st For loop:
i= -5 
first_pointer = 2
second_pointer = 2 
if 8 > 6, then num1[-5] => 8  // The point is to move the larger one of the two to the end of the result array. Which is num1 since we are just modifying the array.
*/

let mergeSortedArray = (nums1, m, nums2, n) => {

    let first = m-1
    let second = n-1

    for(let i=m+n-1; i>=0; i--){
        if(second < 0){
            break;
        }
        if(first >=0 && nums1[first] > nums2[second]){
            nums1[i] = nums1[first]
            first--
        }
        else{
            nums1[i] = num2[second]
            second--;
        }
    }
}