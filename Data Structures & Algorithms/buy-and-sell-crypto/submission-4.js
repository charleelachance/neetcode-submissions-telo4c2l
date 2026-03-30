class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let minSoFar = prices[0];
        for (let i=1; i<prices.length; i++) {
            if (prices[i] < minSoFar) {
                minSoFar = prices[i]
            }
            if (prices[i] - minSoFar > profit) {
                profit = prices[i] - minSoFar;
            }
        }
        return profit;
    }
}
