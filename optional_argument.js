function power( base, exponents = 2 ) {
  let result = 1
  for (var i = 0; i < exponents ; i++) {
     result*= base
  }
  return result
}
console.log(power(3, 3));
