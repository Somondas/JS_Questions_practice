ar =[1, 4, -8, 7, -9, -2]

function getpositivenum(ar){


  return ar.filter(el=> el>=0)

}

let ar2= getpositivenum(ar)
console.log(ar2);
