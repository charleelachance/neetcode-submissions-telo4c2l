class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        nums.forEach((num, i) => {
            map.set(num, i);
        });
        for (let i=0; i<nums.length; i++) {
            const difference = target - nums[i];
            const index = map.get(difference);
            if (index && index !== i) {
                return [i, index]
            }
        }
    }
}
