import contact from './Contact.js';

//1. introduction
/*
In this tutorial, you will learn about JavaScript ES6 with the help of examples.
JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015.
ECMAScript is the standard that JavaScript programming language uses. 
ECMAScript provides the specification on how JavaScript programming language should work.
This tutorial provides a brief summary of commonly used features of ES6 so that you can start quickly in ES6.
*/

//2. JavaScript let
/*
JavaScript let is used to declare variables. Previously, variables were declared using the var keyword.
The variables declared using let are block-scoped. This means they are only accessible within a particular block. For example,
*/
let user_name = "Sek Piseth";
if (true){
    let name = "Hello";
    console.log(name);
}
console.log(user_name);

//3. JavaScript const
/*
The const statement is used to declare constants in JavaScript. For example,
*/
const pi = 3.14;
console.log(pi);

//4. JavaScript arrowFunction
/*
In the ES6 version, you can use arrow functions to create function expressions. For example,
*/
//this is function expression
let sumValues = function (a,b) {return a + b; }
console.log(sumValues(100,200));
//function expression using arrow function
let sumVal = (a,b) => a + b;
console.log(sumVal(200,900));

//5. JavaScript Classes 
/*
JavaScript class is used to create an object. Class is similar to a constructor function. For example,
*/
class Person {
    constructor(name){
        this.name = name;
    }
}
const p1 = new Person("Sek Piseth");
p1.name = "keo";
console.log("My Name is ", p1.name);


//6. Default parameter values
/*
In the ES6 version, you can pass default values in the function parameters. For example,
*/
let welcome = (txt="noName") => txt;
let k = welcome();
console.log(k);

//7. JavaScript Template Literals
const first_name = "Jack";
const last_name = "Sparrow";
console.log(`Hello ${first_name} ${last_name}`);

//8. JavaScript Destructuring
/*
The destructuring syntax makes it easier to assign values to a new variable. For example,
*/
const student = {
    id : 1001,
    name : "seth",
    age : 21
}
let stuId = student.id
let myName = student.name
let age1 = student.age

let {id, name, age} = student;
console.log(id);
console.log(name);
console.log(age);

//9. JavaScript import and export
/*
You could export a function or a program and use it in another program by importing it. This helps to make reusable components. For example, if you have two JavaScript files named contact.js and home.js.
*/
contact("seth", 21)


//10. JavaScript Promise
/*
Promises are used to handle asynchronous tasks. For example,
*/
// returns a promise
let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
});
 
// executes when promise is resolved successfully
countValue.then(
    function successValue(result) {
        console.log(result); // Promise resolved
    },
)
 