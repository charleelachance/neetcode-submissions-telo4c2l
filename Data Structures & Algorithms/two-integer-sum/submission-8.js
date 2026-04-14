class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i=0; i<nums.length; i++) {
            const num = nums[i];
            let complementIndex = map.get(target-num);
            if (complementIndex !== undefined) {
                return [complementIndex, i];
            }
            map.set(num, i);
        }
    }
}
