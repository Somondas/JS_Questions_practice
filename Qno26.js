let ar1 = [1,5,3,2,4,65,76,32,1,2];
let ar3 = [2,5,3,3,76,65,54,2,98,21];


const arrSearch = (ar1, ar2) =>{
  let ar = [];
  for (var er of ar1) {
    if (!ar2.includes(er)) {
      ar.push(er)
    }
    return ar;
  }
}

console.log(arrSearch(ar1, ar3));
