// syntax ternary operator:
// condition ? expression1 : expression2
let a = 12;
let b = 13;

if (a<b){
    console.log("Hello a");
}else{
    console.log("Hello b");
}

//change to ternary op
(a<b) ? console.log("Hello a"):console.log("Hello b");

let find = 14;
console.log("The value is : ", find, ((find%2==0) ? "s":""));