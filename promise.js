let p = new Promise((resolve, reject) =>{
  let x = 1;
  if(x==1){
    resolve('OK')
  }else{
    reject("error")
  }
})

p.then((mes) =>{
  console.log(mes);
}).catch((mes) =>{
  console.log(mes);
})
