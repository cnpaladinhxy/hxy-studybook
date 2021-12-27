/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function calcHeight(node) {
    if(!node) return 0;
    else return Math.max(calcHeight(node.left), calcHeight(node.right)) + 1;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true;
    else {
        return isBalanced(root.left) && isBalanced(root.right) && Math.abs(calcHeight(root.left) - calcHeight(root.right)) < 2
    }
};