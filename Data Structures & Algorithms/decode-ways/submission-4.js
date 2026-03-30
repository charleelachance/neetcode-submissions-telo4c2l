class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let dp = [];

        function decode(i) {
            // base cases
            if (i===s.length) return 1;
            if (s[i] === '0') return 0;
            
            // memoization
            if (dp[i] !== undefined) return dp[i];

            // let takeOneDigit = decode(i+1);
            // let takeTwoDigits = 0;
            if (i+1 < s.length && (s[i] === '1' || (s[i] === '2' && Number(s[i+1]) <= 6))) {
                dp[i] = decode(i+1) + decode(i+2);
            } else {
                dp[i] = decode(i+1);
            }
            return dp[i];
        }
        
        return decode(0);
    }
}
