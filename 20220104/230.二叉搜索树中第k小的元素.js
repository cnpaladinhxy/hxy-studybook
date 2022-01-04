/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 从小到大插入
Array.prototype.addNum = function (num) {
    for(let i=0; i<this.length;i++) {
        if(num<this[i]){
            this.splice(i, 0, num)
            return;
        }
    }
    this.push(num)
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const arr = [];
    function recur(node) {
        if(!node) return null;
        arr.addNum(node.val);
        if(node.left) recur(node.left);
        if(node.right) recur(node.right);
    }
    recur(root);
    return arr[k-1]
};