class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0;
        let start = 0;
        let charCounts = new Map();
        let maxFreq = 0;

        for (let end=0; end<s.length; end++) {
            let prevCount = charCounts.get(s[end]) ?? 0;
            charCounts.set(s[end], prevCount+1);

            maxFreq = Math.max(maxFreq, prevCount+1);

            while (end-start+1-maxFreq > k) {
                let prev = charCounts.get(s[start]);
                charCounts.set(s[start], prev-1);
                start++;
            }

            maxLength = Math.max(maxLength, end-start+1);
        }

        return maxLength;
    }
}
