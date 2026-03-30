class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashmap = new Map();
        for (const num of nums) {
            if (hashmap.has(num)) {
                return true;
            }
            hashmap.set(num)
        }
        return false
    }
}
