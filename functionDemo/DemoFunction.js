
function sumValues(a, b){
    return a + b;
}
let res = function(a,b){
    return a + b;
}

let sum = (a,b) => a +b;

let sumPositiveValueInFunction = (a,b,c,d) => {
    if (a >0){
        return a + b + c + d;
    }else{
        return "A is negative!!!";
    }
}


let k = sumValues(100, 200);
console.log(k);
console.log("result is : ", res(200,500));
console.log("result by arrow is : ", sum(2000,500));
console.log("result by last function is : ", sumPositiveValueInFunction(0,5000,10,10));