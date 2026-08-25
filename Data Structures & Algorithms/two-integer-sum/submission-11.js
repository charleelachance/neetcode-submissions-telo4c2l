class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const lookupMap = new Map();
        for (let i=0; i<nums.length; i++) {
            const num = nums[i];
            if (lookupMap.has(num)) {
                if (num+num===target) {
                    return [lookupMap.get(num), i]
                }
            } else {
                lookupMap.set(num, i);
            }
        }

        for (let i=0; i<nums.length; i++) {
            const num = nums[i];
            if (lookupMap.has(target-num) && lookupMap.get(target-num) !== i) {
                return [lookupMap.get(target-num), i].sort((a, b) => b-a);
            }
        }
    }
}
