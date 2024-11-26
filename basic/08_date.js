//Dates

let myDate=new Date()

console.log(typeof myDate);
console.log(myDate.toDateString());     //Tue Nov 26 2024
console.log(myDate.toISOString());      //2024-11-26T12:49:52.869Z
console.log(myDate.toJSON());           //2024-11-26T12:50:30.471Z
console.log(myDate.toLocaleDateString()); //11/26/2024
console.log(myDate.toLocaleString());     //11/26/2024, 12:51:37 PM
console.log(myDate.toTimeString());       //12:52:08 GMT+0000 (Coordinated Universal Time)



let createdate=new Date(2023,0,1,5,8) //Sun Jan 01 2023 05:08:00 GMT+0000 (Coordinated Universal Time)

// console.log(createdate.toString());

let mytimestamp=Date.now()
console.log(mytimestamp);
console.log(createdate.getTime());       //time in milisecond since the date
console.log(Math.floor(Date.now()/1000));


console.log(myDate.getMonth()+1);

console.log(myDate.toLocaleString('default',{dayPeriod:"long"}));  
//hit ctrl+space

