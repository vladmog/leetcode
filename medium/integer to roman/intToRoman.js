/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = "";
    while (num != 0){
        if (num >= 1000){
            roman += "M"
            console.log(roman[roman.length -1], ": ", num)
            num -= 1000
        } else if (num <= 999 && num >= 900) {
            roman += "CM"
            console.log(roman[roman.length -1], ": ", num)
            num -= 900
        } else if (num >= 500){
            roman += "D"
            console.log(roman[roman.length -1], ": ", num)
            num -= 500
        } else if (num <= 499 && num >= 400){
            roman += "CD"
            console.log(roman[roman.length -1], ": ", num)
            num -= 400
        } else if (num >= 100) {
            roman += "C"
            console.log(roman[roman.length -1], ": ", num)
            num -= 100
        } else if (num <= 99 && num >= 90){
            roman += "XC"
            console.log(roman[roman.length -1], ": ", num)
            num -= 90
        } else if (num >= 50) {
            roman += "L"
            console.log(roman[roman.length -1], ": ", num)
            num -= 50
        } else if (num <= 49 && num >= 40) {
            roman += "XL"
            console.log(roman[roman.length -1], ": ", num)
            num -= 40
        } else if (num >= 10) {
            roman += "X"
            console.log(roman[roman.length -1], ": ", num)
            num -= 10
        } else if (num === 9) {
            roman += "IX"
            console.log(roman[roman.length -1], ": ", num)
            num -= 9
        } else if (num >= 5) {
            roman += "V"
            console.log(roman[roman.length -1], ": ", num)
            num -= 5
        } else if (num === 4) {
            roman += "IV"
            console.log(roman[roman.length -1], ": ", num)
            num -= 4
        } else if (num >= 1) {
            roman += "I"
            console.log(roman[roman.length -1], ": ", num)
            num -= 1
        }
    }
    return roman
};

console.log("\n",intToRoman(3333),"\n")

