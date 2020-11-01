/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    // Iterate through matrix rows
    for (let row = 0; row < A.length; row ++){
        const oldRow = A[row]
        // Create new row array to replace old row array
        let newRow = Array(oldRow.length)
        // Iterate through old row array and assign inverted number to flipped index of new row array
        for (let column = 0; column < oldRow.length; column ++){
            const flipIndex = oldRow.length - column - 1;
            const currNumber = oldRow[column]
            const invertedNum = currNumber ? 0 : 1
            newRow[flipIndex] = invertedNum;
        }
        // Replace old row array with new row array
        A[row] = newRow
    }
    return A
};

const arr = [   //     flip      invert
    [1,1,0],    // -> [0,1,1] -> [1,0,0] 
    [0,0,1],    // -> [1,0,0] -> [0,1,1]
    [0,1,1]     // -> [1,1,0] -> [0,0,1]
]

console.log(flipAndInvertImage(arr))