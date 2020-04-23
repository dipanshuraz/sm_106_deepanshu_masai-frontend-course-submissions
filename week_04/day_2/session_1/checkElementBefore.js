var arr = [1,2,3,4,5,6,7,8,9,7,5,5,4]

function checkElementsBefore(arr) {
  newArr = arr.reduce(function(accu,elements, index){
  accu += elements 
  return accu
  })
  console.log(newArr)
}
checkElementsBefore(arr)