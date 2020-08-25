/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */



var addTwoNumbers = function(l1, l2) {

    console.log(l1)
    console.log(l2)
    
};





const returnRevLinkedList = (num) => {

    let numString = num.toString() 
    // console.log("numString", numString)
    let firstNode
    let prevNode
    
    for (let i = numString.length - 1; i >= 0; i--){
        if (!prevNode){
            firstNode = prevNode = {
                val: Number(numString[i]),
                next: null
            }
        } else {
            prevNode.next = {
                val: (Number(numString[i])),
                next: null
            }
            prevNode = prevNode.next
        }
    }

    return firstNode
}

addTwoNumbers(
    returnRevLinkedList(342), 
    returnRevLinkedList(465)
)
// addTwoNumbers(
//     returnRevLinkedList(1000000000000000000000000000001), 
//     returnRevLinkedList(564)
// )
