//array

//Ways to declare array
const myArr=[0,1,2,3,4]
const myArr2=new Array(1,2,3,4,5)

const nArray=["a","b","c","d"]
console.log(nArray);


// console.log(myArr[1]);    //1

//array methods

// myArr.push(5)
// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)  //it adds value at start of array, its not optimized way
// myArr.shift()

// console.log(myArr.indexOf(0));
// console.log(myArr.toLocaleString());
console.log(myArr.includes(2));

const newArr=myArr.join()  //changes the type of array to string

// console.log(myArr);
// console.log(newArr);

//slice and splice

console.log("A", myArr);          //A [ 0, 1, 2, 3, 4 ]
const myn1=myArr.slice(1,3)          //works on copy of array
console.log(myn1);              //[ 1, 2 ]

console.log("B", myArr);          //B [ 0, 1, 2, 3, 4 ]


const myn2=myArr.splice(1,3)    //works on original array
console.log("C", myArr);       //C [ 0, 4 ]
console.log(myn2);            //[ 1, 2, 3 ]