/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = s
    let key = {
        "I": 1,
        "IV": 4,
        "IX": 9,
        "V": 5,
        "X": 10,
        "XL": 40,
        "XC": 90,
        "L": 50,
        "C": 100,
        "CD": 400,
        "CM": 900,
        "D": 500,
        "M": 1000
    }
    let number = 0
    let skip = false

    // Iterate through string accumulating values of each numeral in number variable
    for (let i = 0; i < s.length; i++){
        if (skip){
            skip = false
            continue
        }

        // Catch subtractors IV and IX
        if ((roman[i] === "I") && (roman[i + 1] === "V" || roman[i + 1] === "X")){
            number += key[`${roman[i] + roman[i + 1]}`];
            skip = true;
        // Catch subtractors XL and XC
        } else if ((roman[i] === "X") && (roman[i + 1] === "L" || roman[i + 1] === "C")){
            number += key[`${roman[i] + roman[i + 1]}`];
            skip = true;
        // Catch subtractors CD and CM
        } else if ((roman[i] === "C") && (roman[i + 1] === "D" || roman[i + 1] === "M")){
            number += key[`${roman[i] + roman[i + 1]}`];
            skip = true
        // Catch single numeral values
        } else {
            number += key[`${roman[i]}`]
        }
    }
    return number
};



console.log("\n", romanToInt("DCLXVI"), "\n")
