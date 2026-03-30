class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memo = [];
        function helper(n) {
            if (n<=2) return n;
            if (memo[n]) return memo[n];
            memo[n] = helper(n-1) + helper(n-2);
            return memo[n];
        }
        return helper(n);
    }
}
