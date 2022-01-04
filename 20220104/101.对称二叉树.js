/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function recur(l, r) {
    if(!l && !r) return true;
    if(!l || !r) return false;
    if(l.val === r.val) {
        return recur(l.left, r.right) && recur(l.right, r.left)
    } else return false;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;
    return recur(root.left, root.right)
};