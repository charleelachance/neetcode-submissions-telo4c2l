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
        // s1: aa || length = 2
        // s2: aabb || length = 4

        for (let i=1; i<s2.length-s1.length+2; i++) {
            

            let isEqual = true;
            for (const [key, value] of s1charCounts) {
                if (s2charCounts.get(key) !== value) {
                    isEqual = false;
                }
            }
            if (isEqual) return true;

            s2charCounts.set(s2[i-1], (s2charCounts.get(s2[i-1]) || 1) - 1);
            s2charCounts.set(s2[i+s1.length-1], (s2charCounts.get(s2[i+s1.length-1]) || 0) + 1);
        }
        return false;

    }
}
