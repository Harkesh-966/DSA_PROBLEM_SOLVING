// Definition for singly-linked list node
function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

// Function to merge two sorted linked lists
var mergeTwoLists = function(list1, list2) {
	let dummyNode = new ListNode(-1);
	let current = dummyNode;

	while (list1 !== null && list2 !== null) {
			if (list1.val <= list2.val) {
					current.next = list1;
					list1 = list1.next;
			} else {
					current.next = list2;
					list2 = list2.next;
			}
			current = current.next;
	}

	if (list1 !== null) {
			current.next = list1;
	} else {
			current.next = list2;
	}

	return dummyNode.next;
};

// Example usage:

// Creating linked list 1: 1 -> 3 -> 5
let list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

// Creating linked list 2: 2 -> 4 -> 6
let list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);
// Merging two lists
let mergedList = mergeTwoLists(list1, list2);

// Function to print the values of the linked list
function printLinkedList(head) {
	let current = head;
	while (current !== null) {
			current = current.next;
	}
}

// Printing the merged list
printLinkedList(mergedList);
