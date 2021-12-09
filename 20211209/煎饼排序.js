

var pancakeSort = function(arr) {
    let res = [];
    while(arr.length > 1) {
        let max = Math.max(...arr), k = arr.indexOf(max) + 1;
        if (k !== arr.length) {
            let a = arr.splice(0, k).reverse();
            arr = [...a, ...arr];
            arr.reverse();
            res.push(k, arr.length);
            arr.pop();
        }
        else arr.pop();
    }
    return res;
};