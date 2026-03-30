/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

/**
 * 
 * [0, 1, 2]
 * val = 0, next = 1
 * val = 1, next = 2
 * val = 2, next = null
 * 
 * output:
 * val = 2, next = 1
 * val = 1, next = 0
 * val = 0, next = null
 * 
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head;
        let prev = null;
        while (curr !== null) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
