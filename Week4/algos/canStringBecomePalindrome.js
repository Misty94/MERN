/* 
    Given to me (Neil) in an interview
    Given a string
    return whether or not it's possible to make a palindrome out of the string's
    characters.
    What is it about a string that makes it possible for it to become a palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

const str7 = "abca";
const expected7 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */

// Erik's
function stringToFrequency(s){
    frequencies = {};
    for (i = 0; i < s.length; i++){
        char = s[i];
        if (char in frequencies){
            frequencies[char] += 1;
        } else {
            frequencies[char] = 1;
        }
    }
    return frequencies;
}

function canStringBecomePalindrome2(s){
    if (s.length == 0){ return false };

    let numberOfOdds = 0;
    const f = stringToFrequency(s);
    for (num  of Object.values(f)){
        if (num % 2 == 1){ 
            numberOfOdds++; 
        }
    }
    return numberOfOdds > 1 ? false: true;
}

// Mine (it works for the test cases, but it doesn't work with another I made up...)
function canStringBecomePalindrome(str) {
    if (str.length === 1) return true;
    let letter = str[0];
    let count = 1;
    let secLet;
    let secCount = 0;
    for (let i = 1; i < str.length; i++){
        if (str[i] === letter){
            count++;
        }
        else if (str[i] !== letter){
            if (!secLet){
                secLet = str[i];
                secCount++;
            }
            else if (secLet === str[i]){
                secCount++;
            }
        }
    }
    if (count === 2 || secCount === 2) return true;
    return false;
}

console.log(canStringBecomePalindrome2(str1))
console.log(canStringBecomePalindrome2(str2))
console.log(canStringBecomePalindrome2(str3))
console.log(canStringBecomePalindrome2(str4))
console.log(canStringBecomePalindrome2(str5))
console.log(canStringBecomePalindrome2(str6))
console.log(canStringBecomePalindrome2(str7)) // I added this one & it doesn't work.

/*****************************************************************************/