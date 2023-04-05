//create an object
let people = {
    id : 1001,
    name : "sek piseth",
    age : 21,
    address : "phnom penh",
    passed : true,
    slogan : function () {console.log("The richest")}
}

//accesing data 
let getId = people.id;
let getName = people.name;
console.log("Id is ", getId);
console.log("Name is ", getName);
people.slogan();