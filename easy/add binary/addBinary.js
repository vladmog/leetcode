/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0
    // Define iterators for both strings
    let aIter = a.length - 1
    let bIter = b.length - 1

    // Total keeps track of iteration addition
    let total = 0
    // Result keeps track of string addition
    let result = ""


    while ((aIter > -1) || (bIter > -1) || carry){
        // Handle carry
        if (carry){
            total += carry
            carry = 0           
        }
        // Handle A String iterator
        if (aIter > -1){
            total += parseInt(a[aIter])
            aIter--
            // If number overflow, carry
            if (total > 1){
                carry++
                total = 0
            }  
        }
        // Handle B String iterator
        if (bIter > -1){
            total += parseInt(b[bIter])
            bIter--
            // If number overflow, carry
            if (total > 1){
                carry++
                total = 0
            }  
        }
        // Merge iterator addition to string addition
        result = total.toString() + result

        // Reset total
        total = 0
    }
    return result
};
console.log(addBinary("1111", "1111"))

// 1111 + 1111 = 11110


//     v   [a||b]Iter
// 1111    carry
//  1111   a
//  1111   b
//  ----
// 11110   result
//    ^    total 