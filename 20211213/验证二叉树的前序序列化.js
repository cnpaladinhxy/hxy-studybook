/**
 * @param {string} preorder
 * @return {boolean}
 */
 var isValidSerialization = function(preorder) {
    let arrTree = preorder.split(',')
    // let res;
    function analysisTree(node) {
        if(!node) return false
        if(node==='#') return node;
        // 不是#就必须有左右手
        let left = analysisTree(arrTree.shift());
        if(!left) return false;
        else {
            let right = analysisTree(arrTree.shift());
            if(!right) {
                return false;
            } 
            return node
        }     
    }
    const res = Boolean(analysisTree(arrTree.shift())) 
    return arrTree.length===0 ? res : false
};