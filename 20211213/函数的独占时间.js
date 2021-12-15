/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
 var exclusiveTime = function (n, logs) {
    let len = logs.length
    if (n === 1) return [Number(logs[len-1].match(/\d*$/)) + 1];
    let resArr = new Array(n).fill(0);
    let preStamp=0;
    let preIds = []
    logs.forEach(log => {
        let funcId = Number(log.match(/^\d+/))
        let newStamp = Number(log.match(/\d+$/))
        if(/^\d+:start:\d+$/.test(log)) {
            preIds.push(funcId)
            if(preIds.length>1) {      
                resArr[preIds[preIds.length-2]] += newStamp - preStamp
            }

        } else {
            newStamp++;
            resArr[preIds.pop()] += newStamp - preStamp
        }
        preStamp = newStamp
    })
    return resArr
};