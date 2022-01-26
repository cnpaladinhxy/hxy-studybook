
Array.prototype.insert = function insert(num) {
    if(this.length===0) this.push(num)
    else {
        for(let i=0;i<this.length;i++) {
            if(num<=this[i]) {
                this.splice(i, 0, num)
                return;
            }
        }
        this.push(num)
    }
}

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let len2 = arr2.length
    let resArr = new Array(len2+1).fill().map(()=>[])
    arr1.forEach(num => {
        let index = arr2.indexOf(num);
        if(index===-1) resArr[len2].insert(num)
        else {
            resArr[index].push(num)
        }
    })
    return resArr.reduce((a, b) => a.concat(b))
};