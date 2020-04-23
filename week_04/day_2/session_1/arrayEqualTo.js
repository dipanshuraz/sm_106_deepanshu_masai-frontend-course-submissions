var arr = [4,3,2,12,11,22,33,87,11,11,11]
var target = 11;
var newArr = []
function arrayEqualTo(arr, target) {
  return arr.filter((element) => {
     if(element!=target) {
       return element
     }
     
  }).map(function(element){
    return Math.pow(element,2)
  })
  // console.log(newArr)
}
console.log(arrayEqualTo(arr, target))