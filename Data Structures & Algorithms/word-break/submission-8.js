class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let dp = [];
        let wordSet = new Set(wordDict);

        function recurse(i) {
            if (i === s.length) {
                return true;
            }
            if (dp[i] !== undefined) return dp[i];
            
            for (let end=i; end<s.length; end++) {
                if (wordSet.has(s.slice(i, end+1))) {
                    if (recurse(end+1)) {
                        dp[i] = true;
                        return true;
                    }
                }
            }
            dp[i] = false;
            return false;
        }

        return recurse(0) ?? false;
    }
}
