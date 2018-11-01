/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
    if ((tree.left !== null && tree.left.value > tree.value) || (tree.right !== null && tree.right.value < tree.value) || tree.left !== null && tree.left.value > tree.right.value) { return false };
    if (tree.left !== null && tree.left.value <= tree.value) { return validBST(tree.left) };
    if (tree.right !== null && tree.right.value >= tree.value) { return validBST(tree.right) };
    return true;
}

// let tr = new BinaryTree(5);
// tr.right = new BinaryTree(6);
// tr.left = new BinaryTree(3)

// console.log(tr.value > tr.right.value)

// console.log(validBST(tr));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
