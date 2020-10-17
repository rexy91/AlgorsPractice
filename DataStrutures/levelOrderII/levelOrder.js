// input:
//         1
//     2            3
//null   null   4        5

// output:
// [ [4,5], [2,3], [1] ]

//Solution, use level order travesal, then add level array to the front of the result array.

let levelOrderBottom = function(root) {
    if(!root) return [];
    //Declare result array
    //Declare queue
    const res=[];
    const q=[];
    //Enqueue root
    q.push(root)

    //As long as queue is not empty, declare level array

    while(q.length){
        const levelArray = [];
        const size = q.length;
            // The inner loop is for each level, because each level will have at most 4 children, so we need a loop to iterate thru them.
            for(let i=0; i<size; i++){
                const node=q.shift();
                levelArray.push(node.val);
                if(node.left) q.push(node.left)
                if(node.right) q.push(node.right)
            }
        res.unshift(levelArray)
    }
    return res;
};