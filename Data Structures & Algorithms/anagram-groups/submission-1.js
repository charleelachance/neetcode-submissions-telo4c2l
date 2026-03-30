class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let masterMap = new Map();
        for (const string of strs) {
            let number = 0;
            for (let i=0; i<string.length; i++) {
                number += string.charCodeAt(i)**2;
            }
            const currValue = masterMap.get(number);
            masterMap.set(number, currValue ? [...currValue, string] : [string]);
        }
        
        let finalArray = [];
        for (const [key, value] of masterMap) {
            finalArray.push(value);
        }
        return finalArray;
    }
}
