function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

    this.greeting =function (){
        console.log(`Welcome ${username}`)
    }
  return this;
}

const userOne = new User("Zahid", 10, true);
const userTwo = new User("Js", 20, false);

console.log(userOne);
// console.log(userTwo);

userOne.greeting()
userTwo.greeting()