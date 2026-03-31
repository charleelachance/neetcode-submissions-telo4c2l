class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let sources = [];
        let width = grid[0].length;
        let height = grid.length;

        let freshOranges = 0;
        for (let i=0; i<height; i++) {
            for (let j=0; j<width; j++) {
                if (grid[i][j] === 2) {
                    sources.push([i, j]);
                } else if (grid[i][j] === 1) freshOranges++;
            }
        }

        if (!freshOranges) return 0;
        if (!sources.length && freshOranges) return -1;

        let queue = sources;
        let minutes = 0;

        while (queue.length) {
            const size = queue.length;
            for (let i=0; i<size; i++) {
                const [y, x] = queue.shift();
                if (y+1 < height && grid[y+1][x] === 1) {
                    queue.push([y+1, x])
                    grid[y+1][x] = 2;
                    freshOranges--;
                }
                if (y-1 >= 0 && grid[y-1][x] === 1) {
                    queue.push([y-1, x])
                    grid[y-1][x] = 2;
                    freshOranges--;
                }
                if (x+1 < width && grid[y][x+1] === 1) {
                    queue.push([y, x+1])
                    grid[y][x+1] = 2;
                    freshOranges--;
                }
                if (x-1 >= 0 && grid[y][x-1] === 1) {
                    queue.push([y, x-1])
                    grid[y][x-1] = 2;
                    freshOranges--;
                }
            }

            if (!queue.length) {
                if (freshOranges) return -1;
                return minutes;
            }

            minutes++;
        }
    }
}
