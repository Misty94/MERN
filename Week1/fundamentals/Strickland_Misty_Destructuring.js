const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // Tesla
console.log(otherRandomCar) // Mercedes

// *****************************************

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // the value was redirected to new variable otherName, so it will give an error
console.log(otherName); // Elon (never ran, since an error was already thrown)

// *****************************************

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // 12345
console.log(hashedPassword); // undefined -> password & the hashedPassword do not exist in the person object

// *****************************************

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; // 2
//Predict the output
console.log(first == second); // false
console.log(first == third); // true

// *****************************************

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // value
const { secondKey } = lastTest; // [1,5,1,8,3,3]
const [ ,willThisWork] = secondKey; // error?
//Predict the output
console.log(key); // value
console.log(secondKey); // [1,5,1,8,3,3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // error?
// I was wrong, this actually outputted 5, which means it set the secondKey[1] to a new variable name of willThisWork

