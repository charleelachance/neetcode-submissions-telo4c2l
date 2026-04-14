class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for (const char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else {
                let opener = stack.pop();
                if (!((opener === '(' && char === ')')
                || (opener === '{' && char === '}')
                || (opener === '[' && char === ']'))) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
