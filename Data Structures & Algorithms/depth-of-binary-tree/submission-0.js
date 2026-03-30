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
    maxDepth(root) {
        let maxDepth = 0;
        function recurse(node, depth) {
            if (!node) {
                return;
            }
            depth++;
            maxDepth = Math.max(maxDepth, depth);
            recurse(node.left, depth);
            recurse(node.right, depth);
        }
        recurse(root, 0);
        return maxDepth;
    }
}
