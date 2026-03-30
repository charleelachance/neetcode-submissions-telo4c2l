class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const sMap = new Map();
        for (const char of s) {
            const curr = sMap.get(char);
            sMap.set(char, curr ? curr+1 : 1);
        }

        const tMap = new Map();
        for (const char of t) {
            const curr = tMap.get(char);
            tMap.set(char, curr ? curr+1 : 1);
        }

        for (const char of s) {
            if (sMap.get(char) !== tMap.get(char)) {
                return false;
            }
        }
        return true;
    }
}
