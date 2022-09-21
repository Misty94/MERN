// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
// function lengthOfLongestSubString(str) {
//     let count = 0;
//     let newStr = [str[0]];
//     let longestC = 0;
//     for (let i = 1; i < str.length; i++){
//         if (str[i] !== newStr){
//             count++;
//             newStr.push(str[i])
//         }
//         else if (count > longestC){
//             longestC = count;
//         } else {
//             count = 0;
//         }
//     }
//     return longestC;
// }

// Ruben's
function lengthOfLongestSubString(str) {
    let maxLen = 0;
    let subStr = "";

    for (let i = 0; i < str.length; i++) {
        const remainingLength = str.length - i;
        subStr = "";
        if (remainingLength < maxLen) {
        return maxLen;
    }

    for (let j = i; j < str.length; j++) {
        if (subStr.includes(str[j])) {
            break;
        } else {
            subStr += str[j];
        }
    }

    if (subStr.length > maxLen) {
        maxLen = subStr.length;
    }
    }
    return maxLen;
}

// Jesse's
function lengthOfLongestSubString2(str) {
    let strLength = str.length;
    if (strLength === 0){ return 0 }
    
    let strSet = new Set();
    strSet.add(str[0]);
    let length = 1;
    let maxLength = 1;

    let i = 1;
    while (i < strLength){
        if (str[i] !== str[i-1] && !strSet.has(str[i])){
            strSet.add(str[i]);
            length++;
            i++
            if( length > maxLength){
                maxLength = length;
            }
        }
        else{
            if (length === 1){
                strSet.clear();
                i++;
                strSet.add(str[i]);
            }
            strSet.clear();
            i = i - length + 1;
            length = 0;
        }
    }
return maxLength;
}

console.log(lengthOfLongestSubString(str1))
console.log(lengthOfLongestSubString(str2))
console.log(lengthOfLongestSubString(str3))
console.log(lengthOfLongestSubString(str4))

/*****************************************************************************/