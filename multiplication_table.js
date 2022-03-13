// for (var i = 1; i<=10; i++) {
//   console.log('7 x '+i+" = "+i*7);
// }

// function printTable(num) {
//   for (var i = 1; i <=10; i++) {
//     console.log(num+" x "+ i +" = " + num * i);
//
//   }
// }
//
// for (var i = 1; i <= 10; i++) {
//   printTable(i)
//   console.log();
// }
for (var i = 1; i <= 10; i++) {
  tableprint(i)
  console.log("");
}

function tableprint(n) {
  for (var i = 1; i <=10; i++) {
    console.log(n," * ",i, " = ", n*i);
  }
}
