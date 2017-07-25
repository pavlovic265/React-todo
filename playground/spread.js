// function add(a, b) {
//     return a + b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 5];

// console.log(add(...toAdd));

var groupA = ['Jen', 'Jacke'];
var groupB = ['Vikram'];
var final = [3, ...groupA, ...groupB];

console.log(final);

var person1 = ['Marko', 26];
var person2 = ['Jen', 19];

function hello(name, age) {
    console.log(`Hi ${name}, you are ${age}`);
}

hello(...person1);
hello(...person2);

var names = ['Mika', 'Pera', 'Zika'];
var final = ['Marko', ...names];

console.log(final);
final.forEach((name) => hi(name));
function hi(name) {
    console.log(`Hi ${name}`);
}
