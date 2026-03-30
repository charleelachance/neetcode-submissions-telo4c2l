class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        function expand(l, r) {
            while (l>=0 && r<s.length && s[l] === s[r]) {
                if (r-l+1 > longestPalindrome.length) {
                    longestPalindrome = s.slice(l, r+1);
                }
                l--;
                r++;
            }
            return s.slice(l+1, r);
        }
        
        let longestPalindrome = "";
        for (let i=0; i<s.length; i++) {
            let odd = expand(i, i);
            let even = expand(i, i+1);
            if (odd.length > longestPalindrome.length) {
                longestPalindrome = odd;
            } else if (even.length > longestPalindrome.length) {
                longestPalindrome = even;
            }
        }

        return longestPalindrome;
    }
}
