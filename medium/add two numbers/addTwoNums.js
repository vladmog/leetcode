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

var addTwoNumbers = function (l1, l2) {
	let total = 0;
	let carry = 0;
	let head;
	let currNode;
	let iterator = 0;

	while (l1 || l2 || carry) {
		console.log("Iterator: ", iterator);
		console.log("l1", l1);
		console.log("l2", l2);
		console.log("carry", carry);
		iterator++;
		if (!head) {
			head = currNode = {
				val: 0,
				next: null,
			};
		}

		if (carry) {
			total += carry;
			carry = 0;
		}
		if (l1) {
			total += l1.val;
			l1 = l1.next;
		}
		if (l2) {
			total += l2.val;
			l2 = l2.next;
		}
		if (total > 9) {
			carry = 1;
			total = total - 10;
		}
		console.log(total);
		currNode.val = total;
		total = 0;
		if (l1 || l2 || carry) {
			currNode.next = {
				val: 0,
				next: null,
			};
		} else {
			currNode.next = null;
		}
		currNode = currNode.next;
	}

	return head;
};

const returnRevLinkedList = num => {
	let numString = num.toString();
	// console.log("numString", numString)
	let firstNode;
	let prevNode;

	for (let i = numString.length - 1; i >= 0; i--) {
		if (!prevNode) {
			firstNode = prevNode = {
				val: Number(numString[i]),
				next: null,
			};
		} else {
			prevNode.next = {
				val: Number(numString[i]),
				next: null,
			};
			prevNode = prevNode.next;
		}
	}

	return firstNode;
};
console.log(addTwoNumbers(returnRevLinkedList(5), returnRevLinkedList(5)));

// let num1 = {
// 	val: 1, // 1
// 	next: {
// 		val: 0, // 2
// 		next: {
// 			val: 0, // 3
// 			next: {
// 				val: 0, // 4
// 				next: {
// 					val: 0, // 5
// 					next: {
// 						val: 0, // 7
// 						next: {
// 							val: 0, // 8
// 							next: {
// 								val: 0, // 9
// 								next: {
// 									val: 0, // 10
// 									next: {
// 										val: 0, // 11
// 										next: {
// 											val: 0, // 12
// 											next: {
// 												val: 0, // 13
// 												next: {
// 													val: 0, // 14
// 													next: {
// 														val: 0, // 15
// 														next: {
// 															val: 0, // 16
// 															next: {
// 																val: 0, // 17
// 																next: {
// 																	val: 0, // 18
// 																	next: {
// 																		val: 0, // 19
// 																		next: {
// 																			val: 0, // 20
// 																			next: {
// 																				val: 0, // 21
// 																				next: {
// 																					val: 0, // 22
// 																					next: {
// 																						val: 0, // 23
// 																						next: {
// 																							val: 0, // 24
// 																							next: {
// 																								val: 0, // 25
// 																								next: {
// 																									val: 0, // 26
// 																									next: {
// 																										val: 0, // 27
// 																										next: {
// 																											val: 0, // 28
// 																											next: {
// 																												val: 0, // 29
// 																												next: {
// 																													val: 0, // 30
// 																													next: {
// 																														val: 0, // 31
// 																														next: {
// 																															val: 0, // 32
// 																															next: null,
// 																														},
// 																													},
// 																												},
// 																											},
// 																										},
// 																									},
// 																								},
// 																							},
// 																						},
// 																					},
// 																				},
// 																			},
// 																		},
// 																	},
// 																},
// 															},
// 														},
// 													},
// 												},
// 											},
// 										},
// 									},
// 								},
// 							},
// 						},
// 					},
// 				},
// 			},
// 		},
// 	},
// };

// let num2 = { val: 4, next: { val: 6, next: { val: 5, next: null } } };

// console.log(addTwoNumbers(num2, num1));
