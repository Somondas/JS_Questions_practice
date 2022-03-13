
class students {
  constructor(name, age, rno) {
    this.sname = name
    this.sage = age
    this.srno = rno
  }

  biodata(){
    return `My name is ${this.sname}. I am ${this.sage} years old. My roll no is ${this.srno}`
  }
}


let ob = new students("Somon", 17, 27)


console.log(ob.biodata());
