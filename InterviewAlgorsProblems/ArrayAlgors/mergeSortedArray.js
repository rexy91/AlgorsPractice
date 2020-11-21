/* 
input 
num1 = [1,2,3,0,0,0], m=3
nums2 = [2,5,6] n=3

nums one will alreayd have lentgh of m + n, with extra spaces initiazed to be 0.

Two pointer method:

SEe Book for explaintation:


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