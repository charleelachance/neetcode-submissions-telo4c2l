class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let minSoFar = prices[0];
        for (let i=1; i<prices.length; i++) {
            if (prices[i-1] < minSoFar) {
                minSoFar = prices[i-1]
            }
            if (prices[i] - minSoFar > profit) {
                profit = prices[i] - minSoFar;
            }
        }
        return profit;
    }
}
