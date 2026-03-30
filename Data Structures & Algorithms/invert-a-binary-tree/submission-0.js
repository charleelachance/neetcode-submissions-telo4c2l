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
     * @return {TreeNode}
     */
    invertTree(root) {
        function recurse(node) {
            if (!node) {
                return;
            }

            const right = node.right;
            node.right = node.left;
            node.left = right;
            recurse(node.left);
            recurse(node.right);
        }
        recurse(root);
        return root;
    }
}
