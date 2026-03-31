class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let queue = [];
        let width = grid[0].length;
        let height = grid.length;

        let freshOranges = 0;
        for (let i=0; i<height; i++) {
            for (let j=0; j<width; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j]);
                } else if (grid[i][j] === 1) freshOranges++;
            }
        }

        if (!freshOranges) return 0;
        if (!queue.length && freshOranges) return -1;

        let minutes = 0;
        const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]

        while (queue.length) {
            const size = queue.length;
            for (let i=0; i<size; i++) {
                const [y, x] = queue.shift();
                for (const [dy, dx] of directions) {
                    const [newy, newx] = [y+dy, x+dx];
                    if (newx >= 0 && newx < width && newy >= 0 && newy < height && grid[newy][newx] === 1) {
                        queue.push([newy, newx]);
                        grid[newy][newx] = 2;
                        freshOranges--;
                    }
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
