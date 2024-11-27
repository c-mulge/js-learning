const marvel_heros=["ironman","thor","hulk"]
const dc_heros=["flash","superman","batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros[3]);  //adds the array itself in an array

//concat method to merge arrays

const allheros= marvel_heros.concat(dc_heros)
// console.log(allheros);

const allnewheros=[...marvel_heros,...dc_heros]    //spread method to merge array
// console.log(allnewheros);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
let real_array=another_array.flat(Infinity)   //this method also merges array
// console.log(real_array);

// console.log(Array.isArray("sagar"))    //checks is there any array
// console.log(Array.isArray(real_array))    //checks is there any array
// console.log(Array.from("sagar"))    //creates an array

let newarray=Array.from("Channveer")  //another method to declare an array
// console.log(newarray);

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
