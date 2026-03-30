class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let dp = [];

        function recurse(i) {
            if (i === s.length) {
                return true;
            }
            if (dp[i] !== undefined) return dp[i];
            
            for (let end=i; end<s.length; end++) {
                if (wordDict.includes(s.slice(i, end+1))) {
                    dp[i] = recurse(end+1);
                    if (dp[i] === true) return true;
                }
            }
            return false;
        }

        return recurse(0) ?? false;
    }
}
