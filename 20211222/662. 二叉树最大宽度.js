/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


function shift(arr) {
    if (arr.length === 0) return null;
    arr.reverse()
    let res = arr.pop()
    arr.reverse()
    return res
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    let max = 0;
    let que = [root];
    root.val = 0;
    let left = 0;
    let right = 0;
    while(que.length) {
        let left = que[0].val
        let count = que.length;

        // let width = que[que.length-1].val - que[0].val+1;
        for(let i=0;i<count;i++) {
            let node = shift(que);
            right = node.val;
            if(node.left) {
                que.push(node.left);
                node.left.val = (node.val - left) * 2;
            }
            if(node.right) {
                que.push(node.right);
                node.right.val = (node.val - left) * 2 + 1;
            }
        }
        let width = right - left + 1
        if(width > max) {
            max = width
        }
    }
    return max;
};