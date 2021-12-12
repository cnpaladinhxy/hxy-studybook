function regTest(pattern, str) {
    pattern.test(str);
    return RegExp.$1
}

function reg(pattern, str) {
        pattern.test(str);
        let tmp = str.replace(pattern, '{' + RegExp.$1 + '}');
        let tmp2;
        while(tmp !== tmp2) {
            if(tmp2 !== undefined) {
                tmp = tmp2
            }     
            tmp2 = tmp.replace(pattern, '{' + regTest(pattern, tmp) + '}');
        }
        let res = tmp2.replace(/[\(\)]/g, '').replace(/{/g, '(').replace(/}/g, ')')
        return res  
  
}

/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    return reg(/\((.*?)\)/, s)
};