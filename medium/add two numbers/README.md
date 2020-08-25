You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

====================================

NOTES: current issue is that the function works but one of the test cases is the following two numbers

1000000000000000000000000000001
564

JavaScript converts large numbers to scientific notation. I saw that there are some fancy ways to convert the numbers to strings via number and string manipulation functions but I will implement a math based solution instead because I want to try to solve this with the knowledge I already have as a challenge.

SOLUTION:

USE THE LINKED LIST TO MY ADVANTAGE RATHER THAN AS AN OBSTACLE

when adding numbers...

11
1289

-   33

=1322

result node is two other equivalent place linked list nodes added together + whatever is carried over from the previous node. Value is carried over if total is greater than 9. What is carried over is total - 9.

end going through linked list when carried over, linked list 1 . next, and linked list 2. next are empty

===========================================

RESULT:

Runtime: 200 ms, faster than 17.27% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 42.2 MB, less than 59.07% of JavaScript online submissions for Add Two Numbers.
