/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let maxNum = 2**31-1;
    let resArr = new Set();
    function sqare(num) {
        num = Number(num)
        return num * num;
    }
    function handle(nn) {
        nn = String(nn);
        let len = nn.length
        let sum = 0;
        for(let i=0;i<len;i++) {
            sum += sqare(nn[i]);
        }
        if(sum!==1 && sum<maxNum) {
            if(resArr.has(sum)) {
                return false
            }
            resArr.add(sum)
            return handle(sum)
        } else {
            if(sum === 1) {
                return true;
            } else {
                return false;
            }
        }
    }
    return handle(n)
};

console.log(isHappy(1111111))