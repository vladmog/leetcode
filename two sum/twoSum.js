/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // Pair value to index for efficient reference
    let numsObj = []
    for (let i = 0; i < nums.length; i ++){
        numsObj.push({
            value: nums[i],
            index: i
        }) 
    }


    // Loop over every potential answer
    for (let j = 0; j < numsObj.length; j++){
        // Seeing what it adds up to with all other potential answers
        for (let k = 0; k < numsObj.length; k++){
            // Skip comparison to self
            if (k === j){
                continue
            }
            let num1 = numsObj[j]
            let num2 = numsObj[k]
            // If values add up to target, return their indices
            if (num1.value + num2.value === target){
                return [num1.index, num2.index]
            }
        }
    }

};