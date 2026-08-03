class Solution {
    padNum(num: number): string {
        return num.toString().padStart(3, '0');
    }

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = '';
        let helpers = '';

        // first put length of strs (array)
        helpers += this.padNum(strs.length);

        for (let string of strs) {
            helpers += this.padNum(string.length);
            result += string;
        }

        return helpers + result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const arrayLength = Number(str.slice(0, 3));
        let helpers = str.slice(3, 3*arrayLength + 3);
        let encodedString = str.slice(3*arrayLength + 3)

        const result = [];

        for (let i=0; i<arrayLength; i++) {
            const wordLength = Number(helpers.slice(0, 3));
            const word = encodedString.slice(0, wordLength);
            result.push(word);
            helpers = helpers.slice(3);
            encodedString = encodedString.slice(wordLength);
        }

        return result;
    }
}
