let str1 = 'Java'

let reverseStr = (str) =>{
  let str2 = ''
  for(let i = str.length - 1; i >= 0; i--){
    str2+=str[i]
  }
  return str2;
}

let str3 =  reverseStr(str1)
if (str1 === str3) {
  console.log(str3);
  console.log('Its a palidrome');
}else {
  console.log(str3);

  console.log("It is not a palidrome");
}
