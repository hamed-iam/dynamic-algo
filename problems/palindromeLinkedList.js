// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const reverse = (head) => {
  let current = head;
  let prev = null;
  let next;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const isPalindrome = function (head) {
  let fast = head;
  let slow = head;
  let startPointer = head;
  let len = 0;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    len++;
  }

  let mid = reverse(slow);

  while (len) {
    len--;
    if (mid.val !== startPointer.val) return false;
    mid = mid.next;
    startPointer = startPointer.next;
  }
  return true;
};
