class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // brute force: try every pair of numbers until you find it

        // iterate through nums to create a hash table
        // iterate again and search for the completement that would reach target

        const lookup = new Map();

        for (let i=0; i<nums.length; i++) {
            const num = nums[i];
            lookup.set(num, i); // stores the last instance
        }

        for (let i=0; i<nums.length; i++) {
            const num = nums[i];
            const difference = target - num;
            const difInMap = lookup.get(difference);
            if (difInMap && difInMap !== i) {
                return [i, difInMap];
            }
        }
    }
}
