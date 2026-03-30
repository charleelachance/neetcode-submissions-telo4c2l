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
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        // let bool = true;
        function recurse(node) {
            if (!node) return 0;
            const left = recurse(node.left);
            const right = recurse(node.right);
            if (Math.abs(left-right)>1 || left===-1 || right===-1) return -1;
            return 1 + Math.max(left, right);
        }
        
        return recurse(root) !== -1;
    }
}
