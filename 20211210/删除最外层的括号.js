/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    let arr=[]
    let str=''
    let num=0
    let len=s.length
    for(let i=0;i<len;i++){
        s[i]==='('? num++ : num--
        str+=s[i]
        if(num===0){
            arr.push(str)
            str=''
        }
    }
    // arr.push(str)
    arr.forEach((item,index) => {
        let lenItem = item.length
        arr[index]=item.slice(1, lenItem-1)
    })
    return arr.join('')
   };