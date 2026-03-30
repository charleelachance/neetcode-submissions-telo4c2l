class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];
        this.recurse(nums, [], 0, result);
        return result;
    }

    recurse(nums, subset, index, result) {
        if (index === nums.length) {
            result.push([...subset]);
            return;
        }
        this.recurse(nums, [...subset, nums[index]], index+1, result);
        this.recurse(nums, subset, index+1, result);
    }
}
