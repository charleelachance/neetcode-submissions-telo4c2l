class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // strategy: Add each opening parenthesis to a stack
        // when you find a closing one, pop and compare
        let stack = [];
        for (const char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else {
                const comparison = stack.pop();
                switch (comparison) {
                    case '(':
                        if (char !== ')') return false;
                        break;
                    case '{':
                        if (char !== '}') return false;
                        break;
                    case '[':
                        if (char !== ']') return false;
                        break;
                    default:
                        return false;
                }
            }
        }
        return stack.length === 0;
    }
}
