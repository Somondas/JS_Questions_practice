//Create a function that will return a Boolean
//specifying if a number is prime
function isPrime(n) {
  if (n<2) {
    return false
  }
  if (n == 2) {
    return true
  }
  let maxDIV = Math.sqrt(n)
  for(let i = 2; i<=maxDIV; i++){
    if (n%i==0) {
      return false
    }
  }
  return true
}

console.log("4 is prime true or false: ",isPrime(4));
