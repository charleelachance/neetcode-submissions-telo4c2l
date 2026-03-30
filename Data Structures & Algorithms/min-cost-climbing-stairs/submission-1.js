class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;
        const memo = [0, 0];

        for (let i=2; i<=n; i++) {
            memo[i] = Math.min(memo[i-1] + cost[i-1], memo[i-2] + cost[i-2]);
        }

        return memo[n];
    }
}
