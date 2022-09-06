// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;

const squareMatrix3 = [
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [18, 17, 20, 21],
    [22, 23, 24, 25]
];
const expected3 = 2;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
    let leftToRight= 0;
    let rightToLeft = 0;
    let sideLength = sqrMatrix.length;

    for (let i = 0; i < sideLength; i++){
        leftToRight += sqrMatrix[i][i];
        rightToLeft += sqrMatrix[i][sideLength-i-1];
    }
    return Math.abs(leftToRight - rightToLeft); // absolute value is the non-negative value without regard to the signs
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));
console.log(diagonalDifference(squareMatrix3));

/*****************************************************************************/