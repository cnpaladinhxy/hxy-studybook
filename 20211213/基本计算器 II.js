/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    let stack = []
    //  s = s.replace(/\s/g, '')
     const len = s.length;
     let num = 0;
     let pre = null
     let plusMinus = '+';  // true+ false-
     for(let i=0;i<len;i++) {
        if(s[i]==' ') {
            if(i!==len-1) continue;
        } else {
            if(isNaN(Number(s[i]))) {
                // 如果不是数字，那么一定是符号
                if(pre===null) {
                    // 上一个如果是+-号那么pre一定为空；如果pre不为空那么上一个符号一定是*/
                    if(s[i].match(/[+\-]/)) {
                        stack.push(plusMinus==='+' ? num : -num)
                    } else if(s[i].match(/[\*\/]/)) {
                        pre = plusMinus==='+' ? num : -num;
                    }
                } else{
                    if(s[i].match(/[+\-]/)) {
                        stack.push(plusMinus==='*' ? (pre * num) : pre>=0 ? Math.floor(pre / num) : Math.ceil(pre / num)) 
                        pre = null;
                    } else if(s[i].match(/[\*\/]/)) {
                        pre = plusMinus==='*' ? (pre * num) :  pre>=0 ? Math.floor(pre / num) : Math.ceil(pre / num)
                    }
                }
                plusMinus = s[i]
                num = 0
            } else {
                // 是数字
                num = num * 10 + Number(s[i])
            }
        }
        if(i===len-1) {
            //  最后一位时直接处理+-*/
            switch (plusMinus) {
                case '+' : stack.push(num);break;
                case '-' : stack.push(-num);break;
                case '*' : stack.push(pre * num);break;
                case '/' : stack.push(pre>=0 ? Math.floor(pre / num) : Math.ceil(pre / num))
            }
        }
     }
     return stack.reduce((a, b) => a + b, 0)
};