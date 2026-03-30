/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function recurse(t1, t2) {
            if (!t1 && !t2) {
                return true;
            } else if (!t1 || !t2) {
                return false;
            } else if (t1.val !== t2.val) {
                return false;
            }
            
            const left = recurse(t1.left, t2.left);
            const right = recurse(t1.right, t2.right);

            return (left && right);
        }
        return recurse(p, q);
    }
}
