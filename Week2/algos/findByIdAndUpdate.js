/* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found
*/

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false,
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false,
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false,
    },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true, isLateToday: true };
const expected1 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
};

const id2 = 1;
const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
};
const expected2 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
};
/* 
    Explanation: In this implementation
    randomKey was not added because it is not an existing key that can be updated
*/

const id3 = 5;
const updateData3 = {};
const expected3 = null;

/**
 * Finds the specified obj by id and updates it with the given key value pairs.
 * - Time: O(n + m) linear, n = collection.length. m = updatedVals num of keys.
 *    Worst case is looping through the full collection because no id matched.
 *    updatedVals is only looped over one time despite being a nested loop
 *    since it is within a condition, hence we use addition instead of
 *    multiplication in the Big O notation.
 * - Space: O(1) constant.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} id
 * @param {Object} updatedVals Key value pairs used to update the found obj.
 * @param {Array<Object>} collection
 * @returns {?Object} The object that was updated or null if no object found.
 */

// Erik's -> This works (expect it adds in the extra key/value to all if added to one)
function findByIdAndUpdate(id, updatedVals, collection) {
    const objects = collection.filter( (item) => item.id === id );
    return objects.length === 0 ? null : { ...objects[0], ...updatedVals};
}

// Jesse's
// function findByIdAndUpdate(id, updatedVals, collection) {
//     let thisStudent = collection.filter((student) => )
// }

// Caleb's -> This was what I was trying to do, but I don't think it works
function findByIdAndUpdate2(id, updatedVals, collection) {
    for (let i = 0; i < collection.length; i++){
        if (id === collection[i]["id"]){
            break;
        }
        if (i >= collection.length){
            return null;
        }
        // Loop through values to update. If they exist on entry, update them.
        for (let [key, value] of Object.entries(updatedVals)){
            if (collection[i][key] !== undefined){
                collection[i][key] = value;
            }
        }
    }
    return collection;
}

// My attempt -> Infinite Loop
// function findByIdAndUpdate(id, updatedVals, collection) {
//     let i = 0;
//     while (i < collection.length){
//         if (collection[i]["id"] === id){
//             for (const [key, value] of Object.entries(updatedVals)) {
//                 // console.log("I am here")
//                 if (collection.key === key){
//                     console.log("This is collection.key: " + key);
//                     collection.value.push(value);
//                 }
//         }
//         }
//         else {
//             i++;
//         }
//     }
//     return collection;
// }

console.log(findByIdAndUpdate(id1, updateData1, students));
// console.log(findByIdAndUpdate2(id2, updateData2, students));
/*****************************************************************************/