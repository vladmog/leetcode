Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

Example 1:

Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
Example 2:

Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Notes:

1 <= A.length = A[0].length <= 20
0 <= A[i][j] <= 1


1 2 3 4
4 1 2 3
3 4 1 2 
2 3 4 1
1 2 3 4

1 2 3 4
1 2 3 4
2 1 3 4
3 2 1 4
4 3 2 1

0 6
1 5
2 4
3 3
4 2
5 1
6 0

row.length - currIndex = newIndex - 1

===========================

RESULT:

Runtime: 80 ms, faster than 87.56% of JavaScript online submissions for Flipping an Image.
Memory Usage: 40.5 MB, less than 28.31% of JavaScript online submissions for Flipping an Image.