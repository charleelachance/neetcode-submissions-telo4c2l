class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let stoneHeap = new MaxHeap(stones);

        while (stoneHeap.size() > 1) {
            const heaviest = stoneHeap.removeMax();
            const secondHeaviest = stoneHeap.removeMax();

            if (heaviest > secondHeaviest) {
                stoneHeap.insert(heaviest-secondHeaviest);
            }
        }

        return stoneHeap.removeMax();
    }
}

class MaxHeap {
    constructor(arr = []) {
        this.heap = arr.slice();
        this.heapify();
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    heapify() {
        let lastParent = Math.floor((this.size() / 2)) - 1;
        for (let i = lastParent; i>=0; i--) {
            this.bubbleDown(i);
        }
    }

    insert(val) {
        this.heap.push(val)
        this.bubbleUp(this.size()-1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] >= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    removeMax() {
        if (this.size() === 1) return this.heap.pop();
        if (this.size() === 0) return 0;

        const max = this.heap[0];
        this.heap[0] = this.heap.pop(); // put the last element at the root
        this.bubbleDown(0);
        return max;
    }

    bubbleDown(index) {
        const length = this.size();

        while (true) {
            let left = 2*index+1;
            let right = 2*index+2;
            let largest = index;

            if (left < length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }
}