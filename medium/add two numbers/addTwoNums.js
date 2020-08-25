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

	while (l1 || l2 || carry) {
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
