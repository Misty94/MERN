/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
const bubbleSort = (nums) => {
    //Code goes here
    for (var i = 0; i < nums.length; i++){
        // You need 2 for loops because after you've gone through the array once, it still may not be in the correct order, so you need to go through it until every number is in the correct place.
        for (var j = 0; j < nums.length - 1; j++){
            if (nums[j] > nums[j + 1]){
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(bubbleSort(numsRandomOrder));
console.log(bubbleSort(numsReversed));

/*****************************************************************************/

// Jesse's
const bubbleSort2 = (nums) => {
    for(let j = 0; j < nums.length/2; j++ ){

    let i = 0;
    let temp1 = null;
    while(i < nums.length-1){
        if (nums[i] > nums[i+1]){
            temp1 = nums[i+1];
            nums[i+1] = nums[i];
            nums[i] = temp1;
        }
        i++;
    }

    let g = nums.length-1;
    let temp2 = null;
    while(g > 0){
        if (nums[g] < nums[g-1]){
            temp2 = nums[g-1];
            nums[g-1] = nums[g];
            nums[g] = temp2;
        }
        g--;
    }
    if (temp1 == null && temp2 == null){
        return nums;
    }
    console.log("running");
}
return nums;
}
const numsRandomOrder2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8, 9, 2, 5, 6, 4, 3, 7, 10, 1, 8,9, 2, 5, 6, 4, 3, 7, 10, 1, 8, 9, 2, 5, 6, 4, 3, 7, 10, 1, 8, 9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(bubbleSort2(numsRandomOrder2));
console.log(bubbleSort2(numsReversed2));
console.log(bubbleSort2(numsOrdered));


// Avery's
const bubbleSort3 = (nums) => {
    let unsorted = true;
    let valsToCheck = nums.length;

    while(unsorted){
        unsorted = false;
        for(var i = 0; i < valsToCheck; i++){
            if(nums[i] > nums[i+1]){
                unsorted = true;
                let temp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = temp
            }
        }
        valsToCheck--;
    }

    return nums;
}

const numsRandomOrder3 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(bubbleSort3(numsRandomOrder3));
console.log(bubbleSort3(numsReversed3));

