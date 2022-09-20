/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "";
const T2 = "";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
// Helper Function
function stringToStack(str){
    returnStack = [];
    for (let i = 0; i < str.length; i++){
        if (str[i] !== "#"){
            returnStack.pop();
        } else {
            returnStack.push(str[i])
        }
    }
    return returnStack;
}

function backspaceStringCompare(S, T) {
    let stack1 = stringToStack(S);
    let stack2 = stringToStack(T);
    if (stack1.length !== stack2.length) return false;
    for (let i = 0; i < stack1.length; i++){
        if (stack1[i] !== stack2[i]) return false;
    }
    return true;
}

// function backspaceStringCompare(S, T) {
//     for (let i = 0; i < S.length; i++){
//         if (S[i] === '#'){
//             S.substr(S[i])
//         }
//     }
//     console.log(S)
//     for (let j = 0; j < T.length; j++){
//         if (T[j] === '#'){
//             T.substr(T[j])
//         }
//     }
//     console.log(T)
//     if (S === T) return true;
//     return false;
// }

console.log(backspaceStringCompare(S1, T1));
console.log(backspaceStringCompare(S2, T2));
console.log(backspaceStringCompare(S3, T3)); // it doesn't work on 3 & 4
console.log(backspaceStringCompare(S4, T4));

/*****************************************************************************/