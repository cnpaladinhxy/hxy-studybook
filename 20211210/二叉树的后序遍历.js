/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */



/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    if(!root) return []
    let arr = []
    function travelTree(tree) {
        if(tree.left) {
            travelTree(tree.left)
        }
        if(tree.right) {
            travelTree(tree.right) 
        }
        if(tree.val!==null) {
            arr.push(tree.val)
        }
    }
    travelTree(root)
    return arr
};

