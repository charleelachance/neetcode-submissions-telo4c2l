class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let tails = [nums[0]];

        for (let i=1; i<nums.length; i++) {
            let number = nums[i];
            let replaced = false;
            for (let j=0; j<tails.length; j++) {
                if (number <= tails[j]) {
                    tails[j] = number;
                    replaced = true;
                    break;
                }
            }
            if (!replaced) tails.push(number);
            console.log(tails);
        }
        return tails.length;
    }
}
