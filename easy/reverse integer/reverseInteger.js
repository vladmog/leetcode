/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let numString = x.toString()
    let unsignedString
    let isNegative = false

    // Separate negative sign from number
    if (numString[0] === "-"){
        isNegative = true
        unsignedString = numString.substr(1)
    } else {
        unsignedString = numString
    }

    // Reverse unsigned number string
    let reverseNumString = ""
    for (let i = 0; i < unsignedString.length; i++){
        reverseNumString = unsignedString[i] + reverseNumString
    }

    // Convert reversed unsigned string to a number
    let reverseUnsigned = Number(reverseNumString)

    // Return 0 if reversed number isn't within range of 32 bit numbers
    if (reverseUnsigned > 2147483647){
        return 0
    }

    // Add sign if negative and return
    if (isNegative){
        return reverseUnsigned * -1
    } else {
        return reverseUnsigned
    }
};


