
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */




/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    preorder.reverse()
    function recur(arr) {
        // 取出最前面的前序队列
        let i = preorder.pop()
        let node = new TreeNode(i);
        // 获取位置，左边的都是这个节点的左子代，右边的都是这个节点的右子代
        let index = arr.indexOf(i);
        let leftArr = arr.slice(0, index);
        let rightArr = arr.slice(index+1);
        node.left = leftArr.length ? recur(leftArr) : null;
        node.right = rightArr.length ? recur(rightArr) : null;
        return node;
    }
    if(!preorder || !inorder) {
        return null
    }
    return recur(inorder)
};