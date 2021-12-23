/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 function compare(A, B) {
    // 比对单元
    if (!A && !B) {
        return true;
    } else {
        if (!B) return true;
        if (!A) return false;
        if (A.val !== B.val) return false;
        else {
            if (compare(A.left, B.left)) {
                return compare(A.right, B.right)
            }
            else return false;
        }
    }
}

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 * 
 * 1.对比A和B，
 * 如果都为空就返回true，否则判断是否相等，如果不相等返回false,遍历A的左，当A.left===B时重新做一个比对单元
 * 如果相等，比对left直到B的left比完，再比对right直到B的right比完
 * 
 * 
 */
var isSubStructure = function (A, B) {
    if(!A || !B) return false
    function recur (A, B) {    
        if (compare(A, B)) return true;
        else {
            if (A && recur(A.left, B)) return true;
            else {
                return A ? (recur(A.right, B)) : false
            }
        }
    }
    return recur(A, B)
};