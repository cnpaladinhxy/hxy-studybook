/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function shift(arr) {
    arr.reverse()
    const res = arr.pop()
    arr.reverse()
    return res
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let arr = [];
    let que = [root];
    let layer = 0
    while(que.length) {
        arr.push([]) 
        let len = que.length 
        for(let i=0;i<len;i++) {       
            let node = shift(que);
            arr[layer].push(node.val)
            if(node.left) que.push(node.left)
            if(node.right) que.push(node.right)
        }
        if(layer % 2 === 1) arr[layer].reverse()
        layer++

    }
    return arr
};