/* 
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion
        (that hasn't been iterated over yet) is unsorted.
    // can shift OR swap target element until it reaches desired position
    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp variable (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */

const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        // save the current 'target' so this space is available to use for shifting
        let numToInsert = nums[i];
        let leftIdx = i - 1;

        while (leftIdx >= 0 && nums[leftIdx] > numToInsert) {
        // shift to the right because it's greater than the item we are going to insert
        nums[leftIdx + 1] = nums[leftIdx];
        leftIdx--;
        }
        // shifting complete, insert position located
        nums[leftIdx + 1] = numToInsert;
    }
    return nums;
}

// David's
const insertionSort3 = (nums) => {
    // Code goes here
    for (let i = 1; i < nums.length; i++){
        let count = i;
        while (nums[count] < nums[count-1]){
            let temp = nums[count];
            nums[count] = nums[count-1];
            nums[count-1] = temp;
            count--;
        }
    }
    return nums;
}

// Erik's
function insertionSort2(array){
    for(let i = 0; i < array.length - 1; i++){
        let j = i + 1;
        while(j > 0 && array[j] < array[j -1]){
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
            j--;
        }
    }
    return array;
}

// My original, but it's pretty much a bubbleSort
// const insertionSort = (nums) => {
//     // Code goes here
//     for (let i = 1; i < nums.length; i++){
//         for (let j = 0; j < nums.length; j++){
//             let curr = nums[i];
//             if (nums[j] > curr){
//                 nums[i] = nums[j];
//                 nums[j] = curr;
//             }
//         }
//     }
//     return nums;
// }

console.log(insertionSort(numsRandomOrder));
console.log(insertionSort(numsReversed));

/*****************************************************************************/