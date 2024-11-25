//Numbers and maths concept in js

/*
const score=4
console.log(score);      //==>4

const balance=new Number(100)
console.log(balance);        //[Number: 100]


console.log(balance.toString());
console.log(typeof (balance.toString()));
console.log(balance.toFixed(2));  // returns==>100.00
console.log(balance.toFixed(3));  

const pre=23.833123
console.log(pre.toPrecision(3));  //returns precise value
console.log(pre.toPrecision(2));  //returns ==>24

const hun=10000000;
console.log(hun.toLocaleString('en-IN'));

*/

//Math library

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.PI);   //returns PI values 
console.log(Math.round(4.80408));  //makes round of value
console.log(Math.ceil(4.2));   //returns 5 only
console.log(Math.floor(4.9));  //returns 4
console.log(Math.pow(2,3));    //returns power

//imp
console.log(Math.random());   //returns only between 0 & 1
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor((Math.random()*(max-min+1)+min)));


