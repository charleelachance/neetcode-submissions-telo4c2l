class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = Array(amount + 1).fill(-1);

        function recurse(i) {
            if (i===0) return 0; 
            if (i<0) return Infinity;
            if (dp[i] !== -1) {
                return dp[i];
            }

            let min = Infinity;
            for (const coin of coins) {
                const result = recurse(i-coin) + 1;
                if (result < min) min=result;
            }

            dp[i] = min;
            return min;
        }

        const answer = recurse(amount);
        return answer === Infinity ? -1 : answer;
    }
}
