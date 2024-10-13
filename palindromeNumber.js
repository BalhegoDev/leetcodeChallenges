/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const splited = String(x).split("");  
    const reverse = String(x).split("").reverse();
        
    for(let i = 0; i < splited.length; i++){
        if(splited[i] != reverse[i]) return false;
    }
    
    return true;
};