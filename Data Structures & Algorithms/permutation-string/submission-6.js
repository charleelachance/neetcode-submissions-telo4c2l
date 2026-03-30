class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // fixed-length window (s1.length)
        let s1charCounts = new Map();
        for (let i=0; i<s1.length; i++) {
            s1charCounts.set(s1[i], (s1charCounts.get(s1[i]) || 0)+1);
        }

        let s2charCounts = new Map();
        for (let i=0; i<s1.length; i++) {
            s2charCounts.set(s2[i], (s2charCounts.get(s2[i]) || 0)+1);
        }

        let numMatches = 0;
        for (const [key, value] of s1charCounts) {
            if (s2charCounts.get(key) === value) {
                numMatches++;
            }
        }

        for (let i=0; i<s2.length-s1.length; i++) {
            if (numMatches === s1charCounts.size) {
                return true;
            }

            const leftChar = s2[i];
            const rightChar = s2[i+s1.length];
            
            if (s1charCounts.has(leftChar) && s1charCounts.get(leftChar) === s2charCounts.get(leftChar)) numMatches--;
            s2charCounts.set(leftChar, s2charCounts.get(leftChar) - 1);
            if (s1charCounts.has(leftChar) && s1charCounts.get(leftChar) === s2charCounts.get(leftChar)) numMatches++;

            if (s1charCounts.has(rightChar) && s1charCounts.get(rightChar) === s2charCounts.get(rightChar)) numMatches--;
            s2charCounts.set(rightChar, (s2charCounts.get(rightChar) || 0) + 1);
            if (s1charCounts.has(rightChar) && s1charCounts.get(rightChar) === s2charCounts.get(rightChar)) numMatches++;
        }

        return numMatches === s1charCounts.size;
    }
}
