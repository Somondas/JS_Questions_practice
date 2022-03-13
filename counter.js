function counter(str, chr) {
  let count = 0
  for(let i =0; i<=str.length; i++){
    if (str[i] === chr) {
      count++
    }
  }
  return count
}
function length_count(s) {
    counts = 0
    for (var i = 0; i < s.length; i++) {
      counts++
    }
    return counts

}
console.log(counter("eeeeeeeekkkeeeeeff", "e"));
console.log(length_count("oh_yeah!"));
