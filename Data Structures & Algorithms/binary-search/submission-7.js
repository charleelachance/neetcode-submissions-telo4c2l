class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length-1;

        while (start<=end) {
            let mid = start + Math.floor((end-start)/2);

            if (nums[mid] === target) {
                return mid;
            }

            if (nums[mid] <= target) {
                start = mid+1;
            } else {
                end = mid-1;
            }
        }
        return -1;
    }
}
