//Custom Polifil for reduce

// arr.reduce((acc,curr,i,arr)=>{},initialValue)

Array.prototype.myReduce = function (cb,initialValue) {
  let accum = initialValue;

  for (let i = 0; i < this.length; i++) {
    accum = accum?cb(accum,this[i],i,this) : this[i]
  }

  return accum;
}

const nums=[1,2,3,4]

const sum = nums.myReduce((acc,curr,i,arr)=>{
  return acc + curr;
},0)

console.log(sum);