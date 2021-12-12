
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    let sequence = [];
    while(pushed.length>0) {
        const seqLen = sequence.length
        if(sequence[seqLen-1]===popped[0]) {
            sequence.pop()
            popped.shift()
        } else {
            sequence.push(pushed.shift())
        }
    }
    while(popped.length>0) {
        if(popped[0]===sequence[sequence.length-1]){
            sequence.pop()
            popped.shift()
        } else {
            return false;
        }
    }
    return true;
};