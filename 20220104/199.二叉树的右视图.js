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
 var rightSideView = function(root) {
    if(!root) return []
    const que = [root];
    const resArr = []
    while(que.length) {
        const len = que.length;
        resArr.push(que[que.length-1].val)
        for(let i=0;i<len;i++) {
            const node = que.shift();
            if(node.left) que.push(node.left)
            if(node.right) que.push(node.right)
        }
    }
    return resArr
};