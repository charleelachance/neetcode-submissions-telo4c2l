class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (const num of nums) {
            const prevVal = map.get(num) || 0;
            map.set(num, prevVal+1);
        }

        let buckets = Array(nums.length+1).fill(null).map(() => []);
        for (const [num, freq] of map) {
            buckets[freq].push(num);
        }

        let result = [];
        for (let i = buckets.length-1; i>=0 && result.length < k; i--) {
            for (const item of buckets[i]) {
                result.push(item);
                if (result.length === k) {
                    break;
                }
            }
        }
        return result;
    }
}
