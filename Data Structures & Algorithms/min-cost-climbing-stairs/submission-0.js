class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        // subproblem: cheapest way to reach step i
        // recurrence: dp[i] = min(dp[i-1], dp[i-2])
        // base cases: dp[0] = 0; dp[1] = 0
        let memo = [0, 0];
        function dp(i) {
            if (memo[i] !== undefined) return memo[i];
            let option1 = dp(i-2) + cost[i-2];
            let option2 = dp(i-1) + cost[i-1];
            memo[i] = Math.min(option1, option2);
            return memo[i];
        }
        return dp(cost.length);
    }
}
