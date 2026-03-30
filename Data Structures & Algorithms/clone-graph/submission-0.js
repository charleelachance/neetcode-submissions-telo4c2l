/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) {
            return null;
        }
        this.map = new Map();
        return this.cloneNode(node);
    }

    cloneNode(node) {
        if (this.map.has(node)) {
            return this.map.get(node);
        }

        let newNode = new Node(node.val);
        this.map.set(node, newNode);
        
        for (const neighbor of node.neighbors) {
            newNode.neighbors.push(this.cloneNode(neighbor));
        }

        return newNode;
    }
}
