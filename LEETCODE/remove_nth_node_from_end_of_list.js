// URL: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// === My Solution ===
var removeNthFromEnd = function(head, n) {
    let prev = null;
    let p1 = head;
    let p2 = head;
    for(let i = n ; i > 1 ; i--) {
        p2 = p2.next;
    }
    if (p2.next === null) return head.next;
    
    while(p2.next) {
        prev = p1;
        p1 = p1.next;
        p2 = p2.next;
    }
    prev.next = p1.next;
    
    return head;
};