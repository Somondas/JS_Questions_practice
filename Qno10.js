var ar =[1, 3, 9, 15, 90]

function Avgarray(ar){

  var sum = 0
  let n = ar.length
  for(i = 0; i<n;i++){
    sum+=ar[i]
  }
  return sum / n
}

console.log(Avgarray(ar));
