/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 function handleString(str) {
    let len = str.length;
    let res = []
    for(let i=0; i< len;i++) {
        if(str[i]==='#') {
            res.pop()
        } else {
            res.push(str[i])
        }
    }
    return res
}

var backspaceCompare = function(s, t) {
    sA = handleString(s)
    sT = handleString(t)
    if(sA.length!==sT.length) return false;
    for(let i in sA) {
        if(sA[i]!==sT[i]) return false;
    }
    return true;
};