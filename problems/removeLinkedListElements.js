// https://leetcode.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  if (!head) return null;

  let currentNode = new ListNode(-1);
  currentNode.next = head;
  head = currentNode;
  while (currentNode.next) {
    if (currentNode.next.val === val) currentNode.next = currentNode.next.next;
    else currentNode = currentNode.next;
  }
  return head.next;
};

// var removeElements = function(head, val) {
//   const preHead = new ListNode(0, head);
//   let curr = preHead;

//   while (curr.next !== null) {
//     if (curr.next.val === val) {
//       curr.next = curr.next.next;
//       continue;
//     }
//     curr = curr.next;
//   }

//   return preHead.next;
// };
