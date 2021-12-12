


/**
 * @param {string} s
 * @return {boolean}
 
 */

 var isValid = function(s) {
    const symbols = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    s = s.split('')
    let taskArr = []
    while(s.length>0){
        let cur = symbols[s[0]]
        if(cur===undefined) {   // 表示是反括号
            let res = taskArr.pop()
            res = typeof res==='function' ? res() : false
            if(!res) return false;
        } else {    // 表示是前括号
            taskArr.push(()=>{
                if(s.shift()!==cur) {
                    return false;
                } else {
                    return true;
                }
            })
            s.shift()
        }
    }

    return taskArr.length ===0 ? true : false;
};

