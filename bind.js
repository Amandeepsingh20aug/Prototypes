
const car1 = {
  color : "Red",
  company : "Ferrari"
}

function purachseCar(currency,price){
  console.log(`I have purchanse ${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myBind = function (context = {},...args){
  if(typeof this != 'function'){
    throw new Error(this + "cannot be bound as it's not callable");
  }
  
  context.fn = this
  return function (...newargs) {
    return context.fn(...args,...newargs);
  }

}

const newFunc = purachseCar.myBind(car1)
console.log(newFunc('$',50000));