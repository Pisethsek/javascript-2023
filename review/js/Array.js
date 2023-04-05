// Using an array literal
const names = ['seth', 'sey', 'san', 'sok'];
for (let i=0; i<names.length; i++){
    console.log(names[i]);
}

//using the new keyword
const namesArr = new Array("hi", "lao");
for (let i=0; i<namesArr.length; i++){
    console.log(namesArr[i]);
}

console.log("----------------");
//using for in loop
for (let i in namesArr){
    console.log(namesArr[i]);
}