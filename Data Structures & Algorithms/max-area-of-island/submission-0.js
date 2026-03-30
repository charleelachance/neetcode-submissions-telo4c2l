class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let max = 0;
        for (let i=0; i<grid.length; i++) {
            for (let j=0; j<grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    const size = this.sinkIsland(grid, i, j);
                    max = Math.max(size, max);
                }
            }
        }
        return max;
    }

    sinkIsland(grid, i, j) {
        if (i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j]===0) {
            return 0;
        }
        grid[i][j] = 0;
        return (1 +
            this.sinkIsland(grid, i+1, j) +
            this.sinkIsland(grid, i-1, j) +
            this.sinkIsland(grid, i, j+1) +
            this.sinkIsland(grid, i, j-1));
    }
}
