//Custom Polyfil for filter

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if(cb(this[i],i,this)) temp.push(this[i]);
  }

  return temp;
}


const nums = [1,2,3,4,5,6]

const moreThanTwo = nums.myFilter((num)=>(
    num > 2
))
console.log(moreThanTwo);