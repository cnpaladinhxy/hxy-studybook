/**
 * @param {string[]} ops
 * @return {number}
 */

 function doOpera(o, specialOperas) {
    const num = Number(o);
    return isNaN(num) ? specialOperas[o] : last => num;
}


var calPoints = function(ops) {
    let res = 0;
    let que = []
    let scoreRecord = []
    let total = 0;
    const specialOperas = {
        '+' : (last, a, b)=> a + b,    // 前两次得分的和
        'D' : last => last *= 2,               // 前一次得分的双倍
    }
    ops.forEach(item => {
        if(item==='C') {
            que.pop();
        }
        else {
            que.push(() => {
                const len = scoreRecord.length
                res = doOpera(item, specialOperas)(res, scoreRecord[len-1], scoreRecord[len-2])
                scoreRecord.push(res)
                total += res
            })
        }
    })
    que.forEach(item=>item())
    return total
};