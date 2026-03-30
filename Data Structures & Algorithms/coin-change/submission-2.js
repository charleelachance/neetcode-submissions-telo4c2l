class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = new Map();

        function recurse(i) {
            if (i===0) return 0; 
            if (i<0) return Infinity;
            if (dp.has(i)) {
                return dp.get(i);
            }

            let min = Infinity;
            for (const coin of coins) {
                const result = recurse(i-coin) + 1;
                if (result < min) min=result;
            }

            dp.set(i, min);
            return min;
        }

        const answer = recurse(amount);
        return answer === Infinity ? -1 : answer;
    }
}
