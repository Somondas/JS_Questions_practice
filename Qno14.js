let f0 = 0
console.log(f0);

let f1 = 1
console.log(f1);

for (let fi = 2; fi<=100; fi++){
  var fn = f1 + f0
  console.log(fn);
  f0 = f1
  f1 = fn
}
