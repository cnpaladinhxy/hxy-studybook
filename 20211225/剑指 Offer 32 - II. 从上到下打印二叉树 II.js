/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
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
var levelOrder = function(root) {
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
        layer++
    }
    return arr
};