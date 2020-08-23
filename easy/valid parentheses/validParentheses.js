/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

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

    // Loop through string
    for (let i = 0; i < s.length; i++){
        // If starting parentheses, push to stack
        if (s[i] in start){
            stack.push(s[i])
        } 
        // If closing parentheses, check if top of stack is corresponding start
        if(s[i] in end){
            let popped = stack.pop()
            if (popped !== end[s[i]]){
                // If popped parenthse doesn't correspond to closing parenthese, string is invalid
                return false
            }
        }
    }
    // If after going through string, stack is empty return true. Else, string is invalid
    if (!stack.length) {return true} else {return false}
};
