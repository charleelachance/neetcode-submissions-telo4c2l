class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let tails = [nums[0]];

        for (let i=1; i<nums.length; i++) {
            let number = nums[i];
            
            let left = 0;
            let right = tails.length;
            while (left < right) {
                const mid = Math.floor((right+left)/2);
                if (number > tails[mid]) {
                    left = mid+1;
                } else {
                    right = mid;
                }
            }

            if (left < tails.length) {
                tails[left] = number;
            } else {
                tails.push(number);
            }
        }
        return tails.length;
    }
}
