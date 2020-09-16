/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    // bits
    let skip = false;
    let isOneBit
    for (let i = 0; i < bits.length ; i++) {
        if (skip){
            skip = false
            continue
        }
        if (bits[i] === 0){
            isOneBit = true
        }
        if (bits[i] === 1){
            isOneBit = false
            skip = true
        }
    }
    return isOneBit
};

