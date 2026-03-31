class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let sources = [];
        let width = grid[0].length;
        let height = grid.length;

        let noRotten = true;
        let noOranges = true;
        for (let i=0; i<height; i++) {
            for (let j=0; j<width; j++) {
                if (grid[i][j] === 2) {
                    sources.push([i, j]);
                    noRotten = false;
                } else if (grid[i][j] === 1 && noOranges) {
                    noOranges=false;
                }
            }
        }
        if (noRotten && !noOranges) return -1;
        if (noOranges) return 0;

        let queue = sources;
        let minutes = 0;

        while (queue.length) {
            const size = queue.length;
            for (let i=0; i<size; i++) {
                const [y, x] = queue.shift();
                if (y+1 < height && grid[y+1][x] === 1) {
                    queue.push([y+1, x])
                    grid[y+1][x] = 2;
                }
                if (y-1 >= 0 && grid[y-1][x] === 1) {
                    queue.push([y-1, x])
                    grid[y-1][x] = 2;
                }
                if (x+1 < width && grid[y][x+1] === 1) {
                    queue.push([y, x+1])
                    grid[y][x+1] = 2;
                }
                if (x-1 >= 0 && grid[y][x-1] === 1) {
                    queue.push([y, x-1])
                    grid[y][x-1] = 2;
                }
            }

            if (!queue.length) {
                for (let i=0; i<height; i++) {
                    for (let j=0; j<width; j++) {
                        if (grid[i][j] === 1) {
                            return -1;
                        }
                    }
                }
                return minutes;
            }

            minutes++;
        }
    }
}
