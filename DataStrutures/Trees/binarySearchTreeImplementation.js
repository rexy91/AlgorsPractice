// Binary tree : Each node has most 2 children
// Binary search tree: Left < Parent < Right


// Node class

class Node {
    constructor(data, left=null, right=null){
        this.data = data
        this.left = left
        this.right = right
    }
    
}

// Tree class
class BST{
    constructor(){
        this.root = null
    }

    /* To add a node
    If tree is empty, set new node to be the root.
    If tree is not empty, we need to figure out where to put this node.
    If node.data < root node, go left recurively until there is no more left.
    If node.data > root node, go right recurivesly until there is no more right.  */


// 1) Adding, if root is not node, then it will go down all the way to call the searchTree function declared inside add.

    // Function takes in data, we will use this data to create new node.
    add(data){
        const node = this.root
        if (node === null){
            //If root is null, just set root to be ther new node.
            this.root = new Node(data);
            return;
        }
        else{
      // If tree is not empty, we need the searchTree(node) recursive function, we declared it here.
            const searchTree = function(node){
            // Root is not null, tree is not empty.
            if(data < node.data){
                // Check if data is smaller than root.
                // If it is, check, if root.left is emtpy, if yes, then just set root.left to be new node.
                if(node.left === null){
                    node.left = new Node(data)
                    return 
                }
                // If root.left is not empty, means this is no the place to put the new node, keep going left.

                else if(node.left!== null){
                        // Go left with this recursion function.
                    return searchTree(node.left);
                }
            }// Go right if larger than root.
            else if(data > node.data){
                //Here node is root cuz we assigned.
                if(node.right === null){
                    node.right = new Node(data)
                    return
                }
                else if(node.right !== null){
                    return searchTress(node.right);
                }
            }
            else{
                return null; //If tree is not empty, data !< root, data!> root, then return null. 
            }
        } //End of searchTreeFunction
            return searchTree(node)       
    }
}// End of add function 

} // end of tree class 