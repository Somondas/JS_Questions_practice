

let arr = [1,2,3]
console.log(arr);
let reverseP =  (arr) =>{
  let remove = arr.shift()
  arr.push(remove)
  return arr
}
// console.log(reverseP(arr));

//reverse an array from right to left
let reverseR = (arr) =>{
  let remove = arr.pop()
  arr.unshift(remove)
  return arr
}

console.log(reverseR(arr));
