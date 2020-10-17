// Binary tree, each node has most two children.
//input
        //         1
        //     2        3
        //   4   5    6  7

//output 

        //         1
        //     3       2
        // 7     6   5   4


let invertBinaryTree = function(root){
    
    //Base case
    if(root == null){
        return root;
    }

    let temp = root.left
    root.left = root.right
    root.right = temp
    // Now tree is 
            //         1
            //     3       2
            //  6     7  4   5
    // call recurion on the subtrees of root 3 and 2 
    invertBinaryTree(root.left)
    invertBinaryTree(root.right)
    // Until there is no more child
    return root;

}
