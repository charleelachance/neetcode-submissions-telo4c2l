class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => (a-b));
        let triples = []
        let p1 = 0;
        while (p1 < nums.length-2) {
            const target = nums[p1];
            let p2 = p1+1;
            let p3 = nums.length-1;
            while (p2 < p3) {
                const p2Prev = nums[p2];
                const p3Prev = nums[p3];
                if (nums[p2] + nums[p3] + target === 0) {
                    triples.push([nums[p1], nums[p2], nums[p3]]);
                    while (nums[p2] === p2Prev && p2 < p3) {
                        p2++;
                    }
                    while (nums[p3] === p3Prev && p2 < p3) {
                        p3--;
                    }
                } else if (nums[p2] + nums[p3] + target < 0) {
                    p2++;
                } else {
                    p3--;
                }
            }
            const p1Prev = nums[p1];
            while (p1Prev === nums[p1]) {
                p1++;
            }
        }
        return triples;
    }
}
