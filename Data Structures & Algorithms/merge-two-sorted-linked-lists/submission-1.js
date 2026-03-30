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
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let p1 = list1;
        let p2 = list2;
        let prev;
        let head;
        
        while (p1 && p2) {
            if (p1.val <= p2.val) {
                if (!head) {
                    head = p1;
                    prev = p1;
                } else {
                    prev.next = p1;
                    prev = p1;
                }
                p1 = p1.next;
            } else {
                if (!head) {
                    head = p2;
                    prev = p2;
                } else {
                    prev.next = p2;
                    prev = p2;
                }
                p2 = p2.next;
            }
        }
        while (p1) {
            if (!head) {
                head = p1;
                prev = p1;
            } else {
                prev.next = p1;
                prev = p1;
            }
            p1 = p1.next;
        }
        while (p2) {
            if (!head) {
                head = p2;
                prev = p2;
            } else {
                prev.next = p2;
                prev = p2;
            }
            p2 = p2.next;
        }

        return head || null;
    }
}
