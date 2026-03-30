class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let dp = [];
        let globalMax = -11;

        function recurse(i) {
            if (i===0) return [nums[i], nums[i]];

            if (dp[i] !== undefined) return dp[i];

            let [min, max] = recurse(i-1);
            let newMin = Math.min(min*nums[i], max*nums[i], nums[i]);
            let newMax = Math.max(max*nums[i], min*nums[i], nums[i]);
            globalMax = Math.max(globalMax, newMax);
            dp[i] = [newMin, newMax];
            return [newMin, newMax];
        }

        let solution = recurse(nums.length-1);
        return Math.max(...solution, globalMax);
    }
}
