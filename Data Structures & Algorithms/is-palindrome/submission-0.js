class Solution {
    isAlphaNum(char) {
        return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9');
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        while (r > l) {
            if (!this.isAlphaNum(s[l])) {
                l++;
                continue;
            }
            if (!this.isAlphaNum(s[r])) {
                r--;
                continue;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
