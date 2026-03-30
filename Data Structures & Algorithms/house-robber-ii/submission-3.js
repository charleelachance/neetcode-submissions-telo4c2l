class Solution {
    rob(nums) {
        const n = nums.length;
        if (n === 0) return 0;
        if (n === 1) return nums[0];

        // space-optimized linear rob from start to end (inclusive indices)
        const robRange = (start, end) => {
            let prev2 = 0, prev1 = 0;
            for (let i = start; i <= end; i++) {
                let curr = Math.max(prev2 + nums[i], prev1);
                prev2 = prev1;
                prev1 = curr;
            }
            return prev1;
        }

        // Case 1: skip first house (houses 1 → n-1)
        // Case 2: skip last house (houses 0 → n-2)
        return Math.max(
            robRange(1, n-1),
            robRange(0, n-2)
        );
    }
}