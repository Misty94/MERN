/* 
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array

        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) {
    let output = [];
    let leftSide = 0;
    let rightSide = 0;

    while (output.length < (left.length + right.length)){
        if (leftSide == left.length){
            for (rightSide; rightSide < right.length; rightSide++ ){
                output.push(right[rightSide]);
            }
        }
        else if (rightSide == right.length){
            for (leftSide; leftSide < left.length; leftSide++ ){
                output.push(left[leftSide]);
            }
        }

        if (left[leftSide] > right[rightSide]){
                output.push(right[rightSide]);
                rightSide++;
            }
        else if (left[leftSide] < right[rightSide]){
            output.push(left[leftSide]);
            leftSide++;
        }
    }

    return output;
}

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {
    if (nums.length < 2){
        return nums;
    }
    let middle = Math.floor(nums.length/2);
    let left = mergeSort(nums.slice(0, middle));
    let right = mergeSort(nums.slice(middle));
    return merge(left, right);
    // let output = [];
    // let middle = Math.floor(nums.length/2);
    // let left = nums.slice(0, middle);
    // let right = nums.slice(middle);
    
    // if (left.length == middle || right.length == middle){
    //     merge(left, right)
    // }

    // else if (left.length == 1){
    //     mergeSort(right);
    // }
    // else if (right.length == 1){
    //     mergeSort(left);
    // }
    // else {
    //     mergeSort(left);
    //     mergeSort(right);
    // }
}

/*****************************************************************************/

const array1 = [1,3,5,7,9,11,13,15]
const array2 = [2,4,6,8,10,12,14,16]
const array3 = [6,3,8,9,4,1]

console.log(merge(array1, array2));
console.log(mergeSort(array3));