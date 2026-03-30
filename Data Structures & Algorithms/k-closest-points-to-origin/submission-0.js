class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let pointHeap = new MinHeap();

        for (const point of points) {
            pointHeap.insert(point);
        }

        let output = [];
        for (let i=0; i<k; i++) {
            output.push(pointHeap.removeMin());
        }
        return output;
    }
}

class MinHeap {
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

    getDistanceFromOrigin(x, y) {
        return Math.sqrt(x**2 + y**2);
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.getDistanceFromOrigin(this.heap[parent][0], this.heap[parent][1]) <= this.getDistanceFromOrigin(this.heap[index][0], this.heap[index][1])) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    removeMin() {
        if (this.size() === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop(); // put the last element at the root
        this.bubbleDown();
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.size();

        while (true) {
            let left = 2*index+1;
            let right = 2*index+2;
            let smallest = index;

            if (left < length && this.getDistanceFromOrigin(this.heap[left][0], this.heap[left][1]) < this.getDistanceFromOrigin(this.heap[smallest][0], this.heap[smallest][1])) {
                smallest = left;
            }

            if (right < length && this.getDistanceFromOrigin(this.heap[right][0], this.heap[right][1]) < this.getDistanceFromOrigin(this.heap[smallest][0], this.heap[smallest][1])) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
}
