/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
    let arr = [];
    function recur(tree) {
        if(tree.val !== null) insertSort(tree.val);
        if(tree.left) recur(tree.left);
        if(tree.right) recur(tree.right);
    }

    function insertSort(num) {
        // 从大到小插入
        if(arr.length===0) return arr.push(num)
        let mid = arr.length >> 1;
        if(num < arr[mid]) {
            while(++mid<arr.length) {
                if(num >= arr[mid]) {
                    return arr.splice(mid, 0, num)
                }
            }
            arr.push(num)
        } else if(num > arr[mid]) {
            while(--mid>-1) {
                if(num <= arr[mid]) {
                    return arr.splice(mid+1, 0, num)
                }
            }
            arr.reverse();
            arr.push(num);
            arr.reverse();
        }
    }

    recur(root);
    return arr[k-1]
};