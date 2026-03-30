class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;

        for (let i=0; i<grid.length; i++) {
            for (let j=0; j<grid[i].length; j++) {
                if (grid[i][j] === "1") {
                    count++;
                    this.exploreIsland(grid, i, j);
                }
            }
        }

        return count;
    }

    exploreIsland(grid, i, j) {
        if (i>=grid.length || j>=grid[0].length || i<0 || j<0) {
            return;
        }
        if (grid[i][j] === "1") {
            grid[i][j] = "0";
            this.exploreIsland(grid, i+1, j);
            this.exploreIsland(grid, i-1, j);
            this.exploreIsland(grid, i, j+1);
            this.exploreIsland(grid, i, j-1);
        }
    }
}
