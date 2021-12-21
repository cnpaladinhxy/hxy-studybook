/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// var kthGrammar = function(n, k) {
//     let str = '0'
//     for(let i=0;i<n;i++) {
//         let st = ''
//         for(let j=0;j<str.length;j++) {
//             if(str[j]==='0') {
//                 st += '01'
//             } else {
//                 st += '10'
//             }
//         }
//         console.log(st, '长度:', st.length);
//         str = st;
//     }
//     return str
// };

// const str = kthGrammar(7)
// console.log(str[78]);   // 79-56 = 56到79的距离是23 -> 就是1到23的距离并翻转 -> 32/2  23-16 -> 7并翻转 -> 3并翻转 -> 1并翻转 

// 0110100110010110100101100110100110010110011010010110100110010110
// 1001011001101001011010011001011001101001100101101001011001101001

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */


 var kthGrammar = function(n, k) {
     if(k === 1) return 0;
     else if(k === 2) return 1; 
    let reverse = false;
    function findK(k) {
        let num = 0;
        function recur(k) {
            let res = k>>1;
            if(res>0) {
                num ++
                return recur(res)
            } 
            else 
            return num;
        }
        return recur(k)
    }
    // 找到比k小的最大的2的次幂数
    let newK = findK(k);
    // k到比k小的最大的2的次幂数的距离就是n减半后的k的位置，每减半一次就要翻转其值
    let distance = k - 2**newK
    reverse = !reverse;
    while(distance > 2) {
        newK = findK(distance)
        distance = distance - 2**newK;
        reverse = !reverse;
    }
    if(distance === 0) {
        // distance=0说明k是2的newK次幂
        distance = 2;
        if(newK % 2 !== 0) reverse = !reverse
    }
    let res = distance === 1 ? false : true;
    reverse && (res = !res)
    return res ? 1 : 0;
};
