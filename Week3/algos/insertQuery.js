/* 
    Given a table name string and an object whose key value pairs represent column names and values for the columns
    return a SQL insert statement string
    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
    Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };

const expected1 = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
    };
const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
 */
// I actually figured it out!! With spacing & quotes help from David & Sama!
function insert(tableName, columnValuePairs) {
    let query = ``;
    let keys = [];
    let values = [];
    for (let [key, value] of Object.entries(columnValuePairs)){
        keys.push(` ${key}` );
        if (isNaN(value)){
            values.push(` "${value}"` );
        }
        else {
            values.push(` ${value}` );
        }
    }
    query = `INSERT INTO ${tableName} (${keys}) VALUES (${values});`
    return query;
}

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));

/**
 * - Time: O(?).
 * - Space: O(?).
 */

// Michael's
function insertFunctional(tableName, columnValuePairs) {
    let keys = Object.keys(columnValuePairs);
    let values = Object.values(columnValuePairs);

    let valuesWithQuotes = values.map(value => {
        return (typeof value == "string") ? "'" + value + "'" : value;
    })

    return `INSERT INTO ${tableName} (${keys.toString()}) VALUES (${valuesWithQuotes.toString()});`;
}

console.log(insertFunctional(table, insertData1));
console.log(insertFunctional(table, insertData2));


/*****************************************************************************/