/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function compareUnit(p, q) {
    // 都为空
    if(!p && !q) return true;
    // 其中一个为空返回false
    if(!p || !q) return false;
    if(p.val === q.val) {
        if(compareUnit(p.left, q.left)) {
            return compareUnit(p.right, q.right)
        }
        return false;
    } else {
        // 不相等直接返回false
        return false
    }
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return compareUnit(p, q)
};