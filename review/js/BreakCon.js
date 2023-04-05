
//break uses with forloop
for (let i=1; i<=10; i++){
    console.log(i);
    if (i == 7){
        break;
    }
}

console.log("----------------");
//break uses with while loop
let c = 0;
while(c<=5){
    console.log(c);
    c++;
    if(c==3){
        break;
    }
}

console.log("----------------");
for (let i=1; i<=10; i++){
    
    if (i == 7){
        continue;
    }console.log(i);
}