var arr = [1,2,3,4,5,6,4,2,1]
target = 3;
function returnMultiplier(arr, target) {
  newArr = arr.map(function(element){
    return element * target;
  })
  console.log(newArr)
}
returnMultiplier(arr, target)