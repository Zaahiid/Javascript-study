// const instaUser = new Object();

const instaUser = {}

instaUser.id ="123abc"
instaUser.name ="John"
instaUser.isLoggedIN = false

// console.log(instaUser)

const regularUser = {
    email: "zahid@zmail.com",
    fullname:{
        userFullName:{
            firstName:"Zahid",
            lastName:"Sheikh"
        }
    }
}

// console.log(regularUser.fullname?.userFullName.firstName)

// combinig objects

const obj1 = {
    1:"a",2:"b"
}
const obj2 = {
    3:"c",4:"d"
}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1,...obj2}

// console.log(obj3)

const users = [{
    id:1,
    email:"i@zmail.com"
},
{
    id:2,
    email:"j@zmail.com"
},
{
    id:3,
    email:"k@zmail.com"
}]

// console.log(users[0].email)

// console.log(instaUser)

// console.log(Object.keys(instaUser))
// console.log(Object.values(instaUser))
// console.log(Object.entries(instaUser))

// console.log(instaUser.hasOwnProperty("isLoggedIN"))
// console.log(instaUser.hasOwnProperty("isLoggedOUT"))

// Destructuring of Objects

const course = {
    courseName: "English",
    price:9999,
    courseInstructor: "Zahid"
}

// console.log(course.courseInstructor)

// const {courseName} = course;
const {courseName:cName}= course

console.log(cName)