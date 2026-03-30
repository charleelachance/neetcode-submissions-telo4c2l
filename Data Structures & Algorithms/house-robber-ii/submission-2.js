class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];
        function dp(houses) {
            let prev2 = 0;
            let prev1 = 0;
            for (const house of houses) {
                let curr = Math.max(prev2 + house, prev1);
                [prev2, prev1] = [prev1, curr];
            }
            return prev1;
        }
        return Math.max(dp(nums.slice(1, nums.length)), dp(nums.slice(0, nums.length-1)));
    }
}
