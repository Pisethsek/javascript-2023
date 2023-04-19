let books = [
    {
        id : 1001,
        name : "Seth1",
        age : 13
    },

    {
        id : 1002,
        name : "Seth2",
        age : 12
    },
    {
        id : 1003,
        name : "Seth3",
        age : 14
    },
    {
        id : 1004,
        name : "Seth4",
        age : 11
    },

]

//map is better than using for loop with array 
books.map(b =>  {
    console.log(b.id);
    console.log(b.name.toUpperCase());
})

console.log("------------------------");


//using filter 
books.map()
//create empty array
let arr = new Array(); 
let arr2= [1,2,3,4];
console.log(arr);
console.log(arr2);

console.log("---------------------");
let arr3 = new Array(1,2,3,4,5,"seth",true);
console.log(arr3);

console.log("--------------");
let arr4 = [
    1,2,3,4,"seth",true
]

console.log(arr4);

console.log("--------------------");
let arr6 = [...arr2]; //copy array
let arr7 = arr6.slice();
console.log(arr6);
console.log("arr7 : ", arr7);

//create object iun array
let person = {
    id : 1001,
    name : "Seth",
    age : 21
}

let person2 = {
    id : 1002,
    name : "Sela",
    age : 24
}

let newArrObj = [person, person2];

console.log(newArrObj);

let allTypeInArr = [
    {
        id : 1002,
        name : "Sela",
        age : 24
    },
    123,
    true,
]

console.log(allTypeInArr, "this is all type of arrays");


