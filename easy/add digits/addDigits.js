/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function(num) {
    // Convert number to string
    let numStr = num.toString()

    // Loop until number is one digit long
    while (numStr.length > 1){
        let total = 0
        // Find total of digits of number
        for (let i = 0; i < numStr.length; i++){
            total += parseInt(numStr[i])
        }
        // Update new number
        numStr = total.toString()
    }

    // Once number is one digit long, return
    return Number(numStr)
};

console.log(addDigits(902384))
