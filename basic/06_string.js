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
console.log(getName.charAt(0));    //returns the character at index
console.log(getName.charAt(1));
console.log(getName.charAt(2));
console.log(getName.indexOf('o'));  //returns the index of the character 

const newstring=getName.substring(0,3)
console.log(newstring);

const anostring=getName.substring(-3,2)
console.log(anostring);

console.log(getName.replace('soham','siddhesh'));   //does not replace with original string
console.log(getName.includes('i'));      //returns boolean
console.log(getName);

console.log(getName.split('o'));       //splits the string in parts
console.log(getName);


const areEqualInUpperCase = (str1, str2) =>
    str1.toUpperCase() === str2.toUpperCase();
  const areEqualInLowerCase = (str1, str2) =>
    str1.toLowerCase() === str2.toLowerCase();
  
  areEqualInUpperCase("ß", "ss"); // true; should be false
  areEqualInLowerCase("ı", "I"); // false; should be true
  

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"
