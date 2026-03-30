class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function helper(start, end) {
            let halfway = Math.round((start + ((end - start) / 2)));
            console.log(start, end, halfway);
            if (nums[halfway] === target) {
                return halfway;
            } else if (halfway === start) {
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
