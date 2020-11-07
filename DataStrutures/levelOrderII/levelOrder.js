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

    //As long as queue is not empty, mean's there is still a level to traverse,declare level array.


    while(q.length){
        const levelArray = [];
        const size = q.length;
            // The inner loop is for iterating thru every node on a level, as we are iterating each node, we also push its children if exiests,
            // To the queue, so means there is still a next level to check. 

            for(let i=0; i<size; i++){
                // Pop the node from the queue and store it inside node variable. 
                const node=q.shift();
                levelArray.push(node.val);
                if(node.left) q.push(node.left)
                if(node.right) q.push(node.right)
            }

        res.push(levelArray)
    }
    return res;
};

