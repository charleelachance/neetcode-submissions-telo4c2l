class Solution {
  topKFrequent(nums, k) {
    const freqMap = new Map();
    for (const num of nums) {
        const curr = freqMap.get(num);
        freqMap.set(num, (curr ?? 0) + 1);
    }
    
    const buckets = Array(nums.length+1).fill(null).map(() => []);
    for (const [num, freq] of freqMap.entries()) {
        buckets[freq].push(num);
    }

    const result = [];
    for (let i = nums.length; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;
  }
}