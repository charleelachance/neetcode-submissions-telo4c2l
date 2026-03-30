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

    recurse(nums, subset, currIndex, result) {
        result.push([...subset]);
        for (let i = currIndex; i < nums.length; i++) {
            // --- make a choice: include nums[i] in the subset ---
            subset.push(nums[i]);
            // --- recurse deeper to explore further subsets ---
            this.recurse(nums, subset, i+1, result);
            // --- undo the choice (backtrack) ---
            subset.pop();
        }
    }
}