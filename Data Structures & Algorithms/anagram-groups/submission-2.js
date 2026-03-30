class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let masterMap = new Map();
        for (const string of strs) {
            const key = string.split('').sort().join('');
            const currValue = masterMap.get(key);
            masterMap.set(key, currValue ? [...currValue, string] : [string]);
        }
        
        let finalArray = [];
        for (const [key, value] of masterMap) {
            finalArray.push(value);
        }
        return finalArray;
    }
}
