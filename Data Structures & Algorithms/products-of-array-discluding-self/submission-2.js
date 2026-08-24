class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixArray = [1];
        let suffixArray = [1];
        let output = [];

        for (let i=1; i<nums.length; i++) {
            prefixArray.push(nums[i-1]*prefixArray[i-1]);
        }

        for (let i=nums.length-2; i>=0; i--) {
            suffixArray.unshift(nums[i+1]*suffixArray[0]);
        }

        for (let i=0; i<nums.length; i++) {
            output[i] = prefixArray[i] * suffixArray[i];
        }

        return output;
    }
}

// nums = [1,2,4,6]
// prefixArray = [1,1,2,8]
// suffixArray = [48,24,6,1]
