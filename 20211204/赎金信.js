/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    const obj = {}
    const lenR = ransomNote.length
    const lenM = magazine.length;
    let num = 0
    for(let i=0;i<lenM;i++) {
        if(obj.hasOwnProperty(magazine[i])) {
            obj[magazine[i]]++
        } else {
            obj[magazine[i]] = 1
        }
    }
    for(let i=0; i<lenR;i++) {
        if(!obj[ransomNote[i]]) return false;
        else {
            obj[ransomNote[i]]--;
        }
    }
    return true;
};