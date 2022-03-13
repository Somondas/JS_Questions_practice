ar = [2, 1, 89, 69, -101, 1]

function findmax(ar) {
  let max = ar[0]
  for (var i = 0; i < ar.length; i++) {
    if (ar[i]>max) {
      max = ar[i]
    }
  }
  return max
}
 let max = findmax(ar)
 console.log(max);
