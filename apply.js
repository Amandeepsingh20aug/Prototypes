
const car1 = {
  color : "Red",
  company : "Ferrari"
}

function purachseCar(currency,price){
  console.log(`I have purchanse ${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myCall = function (context = {}, args = []){
  if(typeof this != 'function'){
    throw new Error(this + "Its not callable");
  }
  if(!Array.isArray){
    throw new Error(this + "Not a Array")
  }
  context.fn = this;
  context.fn(...args)
}

purachseCar.myCall(car1 , ["$" , 50000])