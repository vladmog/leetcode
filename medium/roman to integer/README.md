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


Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


============================

PLANNING

X VII -> 17
X IV = 14

I             1
V             5
X             10
L             50
C             100
D             500
M             1000

MDCLXVI

I
II
III
IV
V
VI
VII
VIII
IX
X
XII
XIII
XIV
XV
XVII
XVIII
XIX
XX
XXI
XXII
XXIII
XXIV
XXV
XXVI
XXVII
XXVIII
XXIX
XXX
XXXI
XXXII
XXXIII
XXXIV
XXXV
XXXVI
XXXVII
XXXVIII
XXXIX
XL
XLI
XLII
XLIII
XLIV
XLV
XLVI
XLVII
XLVIII
XLIX
L
LI
LII
LIII
LIV
LV
LVI
LVII
LVIII
LIX
LX


IV = 4
IX = 9
XL = 40
XC = 90
CD = 400
CM = 900

I             1 || 4 (next is V) || 9 (next is X)
V             5 
X             10 || 40 (next is L) || 90 (next is C)
L             50
C             100 || 400 (next is D) || 900 (next is M)
D             500
M             1000

iterate through string. for each letter add to total. if reach a subtractor, iterate twice two skip the letter being subtracted from.

Once end is reached return the total






X II = 12


==============================

RESULT:

Runtime: 160 ms, faster than 79.55% of JavaScript online submissions for Roman to Integer.
Memory Usage: 42.6 MB, less than 45.75% of JavaScript online submissions for Roman to Integer.