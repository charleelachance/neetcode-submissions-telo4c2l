class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let stoneHeap = new MaxHeap();
        for (const stone of stones) {
            stoneHeap.insert(stone);
        }

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
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    insert(val) {
        this.heap.push(val)
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
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
        this.bubbleDown();
        return max;
    }

    bubbleDown() {
        let index = 0;
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