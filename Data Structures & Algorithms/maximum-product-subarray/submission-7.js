class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let [prevMin, prevMax, globalMax] = [nums[0], nums[0], nums[0]];

        for (let i=1; i <nums.length; i++) {
            const newMin = Math.min(prevMin*nums[i], prevMax*nums[i], nums[i]);
            const newMax = Math.max(prevMin*nums[i], prevMax*nums[i], nums[i]);
            globalMax = Math.max(globalMax, newMax);
            [prevMin, prevMax] = [newMin, newMax]
        }

        return globalMax;
    }
}
