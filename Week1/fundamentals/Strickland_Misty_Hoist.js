console.log(hello);
var hello = 'world';
// var hello; -> gets hoisted
// console.log(hello) -> logs undefined 
// hello = 'world'; -> the assignment stays where it is

var needle = 'haystack';
test(); // runs the function
function test(){
    var needle = 'magnet';
    console.log(needle); // console.logs 'magnet'
}

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // console.logs 'super cool' because the function was never called


var food = 'chicken';
console.log(food); // console logs 'chicken'
eat();
function eat(){
    food = 'half-chicken';
    console.log(food); // console.logs 'half-chicken'
    var food = 'gone';
}


mean(); // mean is not a function (it is later a variable, but never the name of a function, so there'll be an error)
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food); 
    var food = "fish";
    console.log(food);
}
console.log(food);


console.log(genre); // this will console.log undefined because var genre gets hoisted but
var genre = "disco"; // the assignment of 'disco' stays here
rewind(); 
function rewind() {
    genre = "rock";
    console.log(genre); // console.logs 'rock'
    var genre = "r&b";
    console.log(genre); // console.logs 'r&b'
}
console.log(genre); // console.logs 'disco'


dojo = "san jose"; 
console.log(dojo); 
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); 
    var dojo = "burbank";
    console.log(dojo); // console.logs 'burbank'
}
console.log(dojo); 

/* I thought it would be:
undefined
undefined
burbank
undefined 
because the variable wasn't set as a var, let, or const, but I was wrong, because it actually logged everything:
san jose
seattle
burbank
san jose
*/


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name; // {name: Chicago}, {name: Berkeley}
    dojo.students = students; // {name: Chicago, students: 65}, {name: Berkeley, students: 0}
    if(dojo.students > 50){
        dojo.hiring = true; // {name: Chicago, students: 65, hiring: true}
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // error: cannot reassign a const variable
    }
    return dojo;
}
