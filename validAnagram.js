/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    
    const sSplited = s.split("").sort();
    const tSplited = t.split("").sort();
    
    for(let i = 0; i < sSplited.length; i++){
        if(sSplited[i] !== tSplited[i]) return false; 
    }
    return true;
};