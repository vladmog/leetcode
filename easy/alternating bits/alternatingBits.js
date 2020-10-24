/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {


    let binaryCheck = 1 // 1 2 4 8 16 ...
    let binaryPlace = 1 // 1 2 3 4 5  ...

    // Identify highest binary in n
    while (n >= binaryCheck){
        binaryCheck *= 2
        binaryPlace ++
    }
    binaryCheck /= 2
    binaryPlace --
    

    // Iterate through number
    let prevBinary
    let currBinary

    for (let i = binaryPlace; i > 0; i --){
        if (prevBinary === undefined){
            prevBinary = 1
            n -= binaryCheck
            binaryCheck /= 2
            continue
        }

        // Determine if 1 or 0
        if (n >= binaryCheck){
            currBinary = 1
            n -= binaryCheck
        } else {
            currBinary = 0
        }

        // If current binary step isn't different from prevBinary, return false
        if (currBinary === prevBinary){
            return false
        }

        // Prep for next binary check
        binaryCheck /= 2
        prevBinary = currBinary

    }
    // If loop made it to the end, number has alternating bits
    return true
};