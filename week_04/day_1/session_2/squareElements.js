var arr = [1,2,3,4,6,4,3,2,4]
function sqrElem(arr) {
  var sqr = arr.map(function(elem) {
    return elem*elem
  })
  return sqr
}
console.log(sqrElem(arr))