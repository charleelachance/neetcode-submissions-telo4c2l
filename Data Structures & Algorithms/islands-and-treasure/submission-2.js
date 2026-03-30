class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let queue = [];
        let seen = new Set();

        for (let i=0; i<grid.length; i++) {
            for (let j=0; j<grid[0].length; j++) {
                if (grid[i][j]===0) {
                    queue.push([i, j]);
                    seen.add(i + ',' + j);
                }
            }
        }

        function addCell(i, j) {
            if (i<0 || j<0 || i===grid.length || j===grid[0].length || seen.has(i + ',' + j) || grid[i][j]===-1) {
                return;
            }
            queue.push([i, j]);
            seen.add(i + ',' + j);
        }

        let distance = 0;
        while (queue.length>0) {
            for (let wave = queue.length; wave>0; wave--) {
                const [i, j] = queue.shift();
                grid[i][j] = distance;
                addCell(i+1, j);
                addCell(i-1, j);
                addCell(i, j+1);
                addCell(i, j-1);
            }
            distance++;
        }        
    }
}
