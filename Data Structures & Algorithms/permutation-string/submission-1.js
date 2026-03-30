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

        for (let i=0; i<s2.length-s1.length+1; i++) {
            let s2charCounts = new Map();
            const j = i + s1.length - 1;
            for (let k=i; k<=j; k++) {
                s2charCounts.set(s2[k], (s2charCounts.get(s2[k]) || 0)+1);
            }

            let isEqual = true;
            for (const [key, value] of s1charCounts) {
                if (s2charCounts.get(key) !== value) {
                    isEqual = false;
                }
            }
            if (isEqual) return true;
        }
        return false;

    }
}
