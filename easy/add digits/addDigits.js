/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let numStr = num.toString()
    while (numStr.length > 1){
        let total = 0
        for (let i = 0; i < numStr.length; i++){
            total += parseInt(numStr[i])
        }
        numStr = total.toString()
    }
    return Number(numStr)
};

console.log(addDigits(99))

// console.log(Math.floor(38/100))
// console.log(Math.floor(38/10))
// console.log(38%10)