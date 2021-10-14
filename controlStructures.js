let num1 = 9;
let num2 = 4;
let num3 = 6;
if (num1 > num2 ){
    console.log(num1);
}
else if (num1 < num2){
    console.log(num2);
}
else {
    console.log("num1 = num2");
}
if (num1 % 2 == 0){
    console.log("even");
}else{
    console.log("odd");
}
if(num1 > num2 && num2 > num3){
    console.log(`${num1},${num2},${num3}`);
    
}else if(num1 < num2 && num2 < num3){
    console.log(`${num3},${num2},${num1}`);
}else if(num1<num2 && num1<num3 && num2>num3){
    console.log(`${num2},${num3},${num1}`);
}else if (num1<num2 && num1>num3 && num2>num3){
    console.log(`${num2},${num1},${num3}`);
} else if(num1>num2 && num1<num3 && num2<num3){
    console.log(`${num3},${num1},${num2}`);
}else {
    console.log(`${num1},${num3},${num2}`);
}
let amount = 89;
if ( amount < 0 ){
    console.log("Please enter a positive number");
}else if(amount >= 0){
    console.log(amount);
}else{
    console.log(`please enter a number`);
}
let username = `admin`;
let password = `admin`;
if(username.length > 6 && password.length>=8){
    console.log(`login successful`);
} else{
    console.log(`login failed`);
}
let i = 0 ;
while ( i <= 20 ){
    console.log(i);
    i++;
}
for (let i = 20; i >= 0; i--) {
    console.log(i);
  }
  
for(let x = 1; x <= 20 ;x++) {
    if(x%2==0 ){
    console.log(x);}
}
let startRange  = 6;
let endRange = 18;

let range = "";

for (let i = startRange ; i <= endRange; i++) {
    range += i;
  if (i != endRange) {
    range += `,`;
  }}
console.log(range);

for(let i=1; i<=5; i++){
    console.log(`*`.repeat(i));
 }
