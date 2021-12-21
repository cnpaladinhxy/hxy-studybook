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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
     if(!root) return false
    function ergodic(tree, num) {
        let total = num+tree.val
        if(!tree.left && !tree.right) {
            // 叶子结点
            if(total === targetSum) return true
        } 
        // if(total>targetSum) return false // 可能存在负数
        if(tree.left) {
            if(ergodic(tree.left, total)) return true;
        }
        if(tree.right) {
            if(ergodic(tree.right, total)) return true;
        }
        return false
    }
    return ergodic(root, 0)
};