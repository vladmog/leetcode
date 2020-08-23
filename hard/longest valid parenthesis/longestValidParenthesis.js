// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Example 1:

// Input: "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()"



// Example 2:

// Input: ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()"



// Example 3:

// Input: "()(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()"


/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

  

    // Define parentheses pairs with starts as keys for efficient reference
    const start = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    // Define parentheses pairs with ends as keys for efficient reference
    const end = {
        ")": "(",
        "]": "[",
        "}": "{",
    }

    let stack = []

    let longestValid = 0;
    let isCurrValid = false
    let currLength = 0

    // Loop through string
    for (let i = 0; i < s.length; i++){
        // If starting parentheses, push to stack
        if (s[i] in start){
            stack.push({
                parenthese: s[i],
                startIndex: i
            })
            isCurrValid = true
        } 
  

        if(s[i] in end){
            let popped = stack.pop()
            console.log(popped)
            if (popped && popped.parenthese == end[s[i]]){
                isCurrValid = true
                currLength ++
                currLength ++
            } else {
                isCurrValid = false
                currLength = 0
            }
        }

        if(isCurrValid){
            if(currLength > longestValid){
                longestValid = currLength
            }
        } else {
            currLength = 0
        }

        
    }
    return longestValid
};


console.log(longestValidParentheses("()(()"))