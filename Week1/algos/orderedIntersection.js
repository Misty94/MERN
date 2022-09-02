/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.

    Output: only the shared values between the two arrays (deduped).

    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
// const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
// const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
// const expected3 = [];

const numsA4 = [0, 1, 5, 8, 9, 11, 11, 14];
const numsB4 = [2, 5, 7, 9, 10, 13, 14, 14];
// const expected4 = [5, 9, 14]

const numsA5 = [1,2,3,4,5,6,7,8,9,10,12,13,13,14,20,20,21,23,24,25,60,68,71,73,79,100,105,110,500,500];
const numsB5 = [1,100];

/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

function dedupeSorted(nums){
    let temp = nums[0];
    for ( let i = 1; i < nums.length; i++ ){
        if (temp === nums[i]){
            nums.splice(i,1); // splice -> remove a value
            i--;
        } else {
            temp = nums[i];
        }
    }
    return nums;
}

// console.log(dedupeSorted(numsA1));


function orderedIntersection(sortedA, sortedB) {
    
    dedupeSorted(sortedA);
    dedupeSorted(sortedB);
    // console.log("Deduped A ", sortedA);
    // console.log("Deduped B ", sortedB);

    let newArr = [];
    let i = 0;
    let j = 0;
    while (i < sortedA.length && j < sortedB.length){
        // console.log(i); // this to test if lines 76 & 82 save time & it proves the function only runs for as long as the length of the longer array.
        if (sortedA[i] === sortedB[j]){
            newArr.push(sortedA[i]);
            i++;
            j++;
        }
        else if (sortedA[i] < sortedB[j]){
            // if (sortedB[j] > sortedA[sortedA.length - 1]){ // the if statement here & on 81 saves time if one array is super long and the other is super short
            //     break;
            // }
            i++;
        }
        else {
            // if (sortedA[i] > sortedB[sortedB.length - 1]){
            //     break;
            // }
            j++;
        }
    }
    return newArr;
}

// Avery's
function orderedIntersection2(nums1, nums2){
    let ordered = [];
    for(var i = 0; i < array1.length; i++){
        if(array2.includes(array1[i]) && !ordered.includes(array1[i])){
            let index = array2.indexOf(array1[i])
            ordered.push(array2[index])
        }
    }
    return ordered;
}

console.log(orderedIntersection(numsA1, numsB1));
console.log(orderedIntersection(numsA2, numsB2));
console.log(orderedIntersection(numsA3, numsB3));
console.log(orderedIntersection(numsA4, numsB4));
console.log(orderedIntersection(numsA5, numsB5));

/*****************************************************************************/