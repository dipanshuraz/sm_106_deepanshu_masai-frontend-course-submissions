var arr = [1,2,3,4,6,4,3,2,4]
function checkElementBefore(arr) {
var res = arr.map(function(elem, index, arr){
    if(arr[index-1] > arr[index]) {
      return -1
    } else {
      return 1
    }
  })
  return res
}
console.log(checkElementBefore(arr))