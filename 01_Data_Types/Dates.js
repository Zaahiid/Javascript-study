
const myDate = new Date();
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023, 0, 23,5,3);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-15-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// Convert to seconds
// console.log(Math.round(Date.now()/1000))

let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

// `${newDate.getDay()} and the time is`

const formattedDate= newDate.toLocaleString("default",{
    weekday:"long"
})

console.log(formattedDate)