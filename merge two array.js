

let mergeArr = (arr1, arr2) =>{
  let arr3 = []
  for (var ar of arr1) {
    arr3.push(ar)
  }
  for (var ar of arr2) {
    arr3.push(ar)
  }
  return arr3
}

let arr1 = [1,2,3,4]
let arr2 = [11,4,10,9]
// console.log(mergeArr(arr1, arr2));
// using ES6
let mergeArrnew = (arr1, arr2) =>{
  let arr3 = [...arr1, ...arr2]
  console.log(arr3);
}
mergeArrnew(arr1, arr2)
