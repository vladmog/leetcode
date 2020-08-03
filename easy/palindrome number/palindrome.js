/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // If negative, not a palindrome. Return false
    if (x < 0) {
        return false
    }

    // Determine reverse of number for comparison
    let numStr = x.toString()
    let revNumStr = ""
    for (let i = 0; i< numStr.length; i++){
        revNumStr = numStr[i] + revNumStr 
    }

    // If palindrome, return true. Else return false
    if (numStr === revNumStr){
        return true
    } else {
        return false
    }
};
