// reduce loop

const myNumbers = [1, 2, 3];

const newNums = myNumbers.reduce(function (accumulator, currentValue) {
  console.log(`acc : ${accumulator} and curVal : ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log(newNums);

const myTotal = myNumbers.reduce((acc,cur)=> acc + cur,0);
console.log(myTotal)

const shoppingCart = [
  
    {
      itemName:"JS course",
      price: 2999
    },
    {
      itemName:"Python course",
      price: 2999
    },
    {
      itemName:"Mobile app development",
      price: 5999
    },
    {
      itemName:"DS course",
      price: 12999
    },
    ];
    
    const totalAmount = shoppingCart.map((item)=>item.price).reduce((acc,cur)=>acc+cur,0);
    const totalAmount2 = shoppingCart.reduce((acc,cur)=>acc+cur.price,0);
    
    console.log(totalAmount2)
    console.log(totalAmount)