/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let k = 1
    while (k <= n){
        n -= k
        k++
    }
    return k - 1
};

console.log("\noutput: ", arrangeCoins(9), "\n")

// Input 5 should output 2
// Input 3 should output 2

// x
// xx
// xxx