class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // start both pointers at 0
        // increase the right pointer, adding each character to a hash map
        // once reaching a duplicate, increment the left counter until passing that same character
        // ALSO keep track of that length

        let maxLength = 0;
        let lookupTable = new Set();
        let left = 0;

        for (let right=0; right<s.length; right++) {
            if (lookupTable.has(s[right])) {
                while (s[left] !== s[right]) {
                    lookupTable.delete(s[left]);
                    left++;
                }
                left++;
            }
            lookupTable.add(s[right]);
            maxLength = Math.max(right-left+1, maxLength);
        }
        
        return maxLength;

    }
}
