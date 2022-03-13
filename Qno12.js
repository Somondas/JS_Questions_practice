let ar = [1, 4, 5, 7, -1, ,-90, -2]

function get_positivear(ar){
  let ar1 = []
  for(i = 0; i<ar.length; i++){
    let el = ar[i]
    if(el>0){
      ar1.push(el)
    }
  }
  return ar1
}

ar1 = get_positivear(ar)
console.log(ar1);
