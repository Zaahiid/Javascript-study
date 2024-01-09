// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const jsUser ={
    name: 'Zahid',
    "full name":"Zahid Sheikh",
    score:100,
    [mySym]: "mySymbol",
    location:"Nagpur",
    email:"zahid@zmail.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Thursday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email= "zahid@kmail.com"
console.log(jsUser)

// Object.freeze(jsUser)
// jsUser.email = "zahid@tmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello")
};
jsUser.greetingTwo = function(){
    return (console.log(`Hello ${this.name}`))
};
jsUser.greetingTwo();