class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (const num of nums) {
            const prevValue = map.get(num);
            map.set(num, (prevValue ?? 0) + 1);
        }
        
        let mapArray = [...map.entries()];
        mapArray.sort(([,a],[,b]) => b-a);

        let final = [];
        for (let i=0; i<k; i++) {
            final.push(mapArray[i][0])
        }
        return final
    }
}
