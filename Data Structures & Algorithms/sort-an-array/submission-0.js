class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        function randomPartition(arr, low, high) {
            let randomIndex = Math.floor(Math.random() * (high-low+1) + low);
            [arr[high], arr[randomIndex]] = [arr[randomIndex], arr[high]];
            return partition(arr, low, high);
        }

        function partition(arr, low, high) {
            const pivot = arr[high];
            let i = low - 1;
            for (let j=low; j<high; j++) {
                if (arr[j] <= pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
            return i+1;
        }

        function quickSort(arr, low, high) {
            if (low < high) {
                let pivotIndex = randomPartition(arr, low, high);
                quickSort(arr, low, pivotIndex-1);
                quickSort(arr, pivotIndex+1, high);
            }
        }

        quickSort(nums, 0, nums.length-1);
        return nums;
    }
}
