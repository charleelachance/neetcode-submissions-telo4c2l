class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function helper(start, end) {
            let halfway = Math.floor((start + ((end - start) / 2)));
            
            if (nums[halfway] === target) {
                return halfway;
            } else if (start > end) {
                return -1;
            } else if (nums[halfway] > target) {
                return helper(start, halfway-1);
            } else {
                return helper(halfway+1, end);
            }
        }

        return helper(0, nums.length-1);
    }
}
