const str="sidd"
const repo =" soham"

// console.log(str+repo+" sid")    //outdated syntax

//today we use backticks ``
console.log(`hello ${str}, how are you`)
console.log(`hello ${str+repo}, how are you`)

const getName=new String('soham')
console.log(typeof String);   // String==>function
console.log(getName[0]);       //s
console.log(getName.__proto__);       //to check prototype, but don't show here

console.log(getName.length);
console.log(getName.toLowerCase());
console.log(getName.toUpperCase());
console.log(getName.charAt(0));
console.log(getName.charAt(1));
console.log(getName.charAt(2));
console.log(getName.indexOf('o'));

const newstring=getName.substring(0,3)
console.log(newstring);

const anostring=getName.substring(-3,2)
console.log(anostring);

console.log(getName.replace('soham','siddhesh'));   //does not replace with original string
console.log(getName.includes('i'));      //returns boolean
console.log(getName);

console.log(getName.split('o'));       //splits the string in parts
console.log(getName);
