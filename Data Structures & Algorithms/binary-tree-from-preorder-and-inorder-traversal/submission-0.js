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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        function recurse(i, j, k) {
            if (i > preorder.length-1) {
                return null;
            }
            const currVal = preorder[i];
            let node = new TreeNode(currVal);

            const inorderLocation = inorder.indexOf(currVal);
            const sizeOfLeftTree = inorderLocation - j;
            node.left = inorderLocation > j ? recurse(i+1, j, inorderLocation-1) : null;
            node.right = inorderLocation < k ? recurse(i+sizeOfLeftTree+1, inorderLocation+1, k) : null;

            return node;
        }
        return recurse(0, 0, preorder.length-1);
    }
}
