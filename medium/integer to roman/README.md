Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

==============================

PLANNING

I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I             1 || 4 (next is V) || 9 (next is X)
V             5 
X             10 || 40 (next is L) || 90 (next is C)
L             50
C             100 || 400 (next is D) || 900 (next is M)
D             500
M             1000

"pull out" subtract from total, append roman numeral equivalent to roman numeral string.

LOOP {
    If a number is greater than 1000, you can pull out an M
    If a number is between 900 and 999 inclusive you can pull out a CM
    If a number is greater than 500, you can pull out a F
    If a number is between 400 and 499 invlusive you can pull out a XD
    If a number is greater than 100, you can pull out C
    If a number is between 90 and 99 inclusive you can pull out a XC
    If a number is greater than 50, you can pull out an L
    If a number is between 40 and 49 inclusive you can pull out a XL
    If a number is greater than 10, you can pull out an X
    If a number is 9, you can pull out a IX
    If a number is greater than 5, you can pull out a V
    If a number is 4 you can pull out a IV
    If a number is greater than 1, you can pull out an I
    If a number is 0 return number
}


============================

RESULTS:

Runtime: 144 ms, faster than 94.58% of JavaScript online submissions for Integer to Roman.
Memory Usage: 41.7 MB, less than 88.79% of JavaScript online submissions for Integer to Roman.