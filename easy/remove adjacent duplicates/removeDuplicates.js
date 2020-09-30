/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    // iterate through S
    // if S[i] === S[i+1] cut S[i] and S[i+1] out
    // if S[i - 1] === S[i + 2]
    //     [i - 2] === S[i + 3]
    //     [i - 3] === S[i + 4]
    //     ... remove S[i-n] and S[i+n+1]
    //     store changes in new variable
    // update S from new variable and continue iterating
};