//which came first
function chiken() {
  return egg()
}
function egg() {
  return chiken()
}
console.log("came first"+ chiken())
