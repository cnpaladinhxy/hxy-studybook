/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let i=j=0;

    let tmp = '';   // 记录上一次的操作
    // i+ j+ 
    let m = matrix.length;
    let n = matrix[0].length
    while(matrix[i][j]!==target) {
        if(matrix[i][j] < target) {
            // 小于
            if(j<n-1) {
                j++;
                tmp = 'j+'
            } else if(i<m-1) {
                i++
                tmp = 'i+'
            } else return false
        } else {
            // 大于
            if(tmp === '') return false;
            else if(tmp === 'j+') {
                n=j;
                j--;
                i++;
                tmp = 'i+'
            } else if(tmp === 'i+') {
                n=j;
                j--;
            }
        }
        if(matrix[i] === undefined || matrix[i][j] === undefined) return false
    }
    return true
};