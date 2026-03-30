class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // subproblem: maximum amount of money you can get from the first n houses
        // recurrence: dp(n) = max(nums[n] + dp(n-2), dp(n-1))
        // base case: dp(0): nums[0]; dp(1) = max(nums[0], nums[1])
        let memo = [];

        function dp(n) {
            if (n===0) return nums[0];
            else if (n===1) return Math.max(nums[0], nums[1]);
            else if (memo[n] !== undefined) return memo[n];
            memo[n] = Math.max(nums[n] + dp(n-2), dp(n-1));
            return memo[n]
        }

        return dp(nums.length-1);
    }   
}
