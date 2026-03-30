class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longestPalindrome = "";

        function expand(l, r) {
            while (l>=0 && r<s.length && s[l] === s[r]) {
                if (r-l+1 > longestPalindrome.length) {
                    longestPalindrome = s.slice(l, r+1);
                }
                l--;
                r++;
            }
        }

        for (let i=0; i<s.length; i++) {
            expand(i, i);
            expand(i, i+1);
        }

        return longestPalindrome;
    }
}
