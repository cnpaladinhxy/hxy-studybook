/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */


/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    let res = [];

    function recur(tree) {
        if(!tree) return
        res.push(tree.val)
        if(tree.children){
            tree.children.forEach(node => {
                recur(node)
            });
        }
    }
    recur(root)
    return res
};