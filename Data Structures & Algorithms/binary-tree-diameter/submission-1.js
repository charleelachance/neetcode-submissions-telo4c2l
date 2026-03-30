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
     * @return {number}
     */

    diameterOfBinaryTree(root) {
        let max = 0;
        function recurse(node) {
            if (!node) return 0;
            const left = recurse(node.left);
            const right = recurse(node.right);
            max = Math.max(max, left + right);
            return 1 + Math.max(left, right);
        }
        recurse(root);
        return max;
    }
}
