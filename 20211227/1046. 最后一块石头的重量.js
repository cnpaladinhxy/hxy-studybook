
function insert(val ,arr) {
    for(let i=0;i<arr.length;i++) {
        if(val<=arr[i]) {
            arr.splice(i, 0, val);
            return;
        }
    }
    arr.push(val)
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a, b) => a - b);
    while(stones.length>1) {
        let bigest = stones.pop();
        let secondBig = stones.pop();
        let diff = bigest - secondBig;
        if(diff > 0) insert(diff, stones)
    }
    return stones.length ? stones[0] : 0
};