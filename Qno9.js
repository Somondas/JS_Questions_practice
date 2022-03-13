//Calculate the sum of numbers
//in an array of numbers.

function Calculatearr(ar) {
  var sum = 0;
  for(let i=0; i<ar.length; i++){
    sum +=ar[i];
  }
  return sum;
}
var ar = [1, 3, 5, 7]
var sum = Calculatearr(ar)
console.log(sum);
