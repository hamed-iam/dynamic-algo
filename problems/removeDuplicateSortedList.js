/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const deleteDuplicates = function (head) {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head
};

// export const deleteDuplicates = function (head) {
//   let dummy = new ListNode(-Infinity, head);
//   let curr = head;
//   let prev = dummy;

//   while (curr) {
//     if (curr.val === prev.val) {
//       while (curr && curr.val === prev.val) {
//         curr = curr.next;
//       }
//       prev.next = curr;
//     } else {
//       prev = curr;
//       curr = curr.next;
//     }
//   }
//   return dummy.next;
// };
