//ex1: function dispay text
function say(){ //no return
    console.log("Say Hi");
}
//function with paramter
function sayName(user){ //no return
    console.log(`Hello ${user}`);
}
//add two number
function add(a,b){ //no return
    console.log("the res is ", (a+b));
}

//sum two numbers
function sumTwoNumber(a, b){
    return a + b;
}

//function expression 
let getSum = function (a, b){return a + b};
let kes = function (text) {console.log(text)}

//calling function
say();
sayName("Sek Piseth");
add(100, 200);
let res = sumTwoNumber(10, 90);
console.log(res);
console.log(getSum(100,400));
kes("I like pizza")


