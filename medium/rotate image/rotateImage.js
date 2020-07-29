/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix, position) {
    //  Define current row, column, value, n
        if (!position){
            position = [0,0]
        }
        let rowInd = position[0]
        let columnInd = position[1]
        const value = matrix[rowInd][columnInd]
        const n = matrix.length
    //  define prospective rotated position
        let newRowInd = columnInd
        let newColumnInd = n - rowInd - 1
    //  define position of next element in matrix, if end of matrix reached, return
        // Traverse through row
        if (columnInd < n-1){
            columnInd ++
        // At end of row, begin traversing next row
        } else if (rowInd < n-1){
            columnInd = 0
            rowInd ++
        // If final element of matrix, move element to new position and begin unwinding
        } else {
            matrix[newRowInd][newColumnInd] = value
            return
        }
        // Recursion
        rotate(matrix, [rowInd, columnInd])
        // on unwind, assign value to new position
        matrix[newRowInd][newColumnInd] = value
    };