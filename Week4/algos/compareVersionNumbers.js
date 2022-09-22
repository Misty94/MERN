// https://leetcode.com/problems/compare-version-numbers/

/*

Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.

Helpful methods:
    - .split(characterToSplitOn) - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
    - .parseInt - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails

Bonus, solve without .split

*/

const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01"; // mine doesn't work with this test case
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 */
// Erik's
function compareVersionNumbers2(v1, v2) {
    let v1arr = v1.split(".").map(item => parseInt(item))
    let v2arr = v2.split(".").map(item => parseInt(item))

    if (v1arr > v2arr) return 1;
    else if (v1arr < v2arr) return -1;
    else return 0;
}

// Mine
function compareVersionNumbers(v1, v2) {
    for (let i = 0; i < v1.length; i++){
        if (v1[i] === 0 || v2[i] === 0) continue;
        if (v1[i] === v2[i]) continue;
        if (v1[i] > v2[i]){
            return 1;
        }
        if (isNaN(v1[i]) || isNaN(v2[i])){
            return 1;
        }
        if (v1[i] < v2[i]){
            return -1;
        }
    }
    return 0;
}

console.log(compareVersionNumbers2(test1V1, test1V2))
console.log(compareVersionNumbers2(test2V1, test2V2))
console.log(compareVersionNumbers2(test3V1, test3V2))
console.log(compareVersionNumbers2(test4V1, test4V2))
console.log(compareVersionNumbers2(test5V1, test5V2)) // it doesn't work with this test case.
console.log(compareVersionNumbers2(test6V1, test6V2))

/*****************************************************************************/