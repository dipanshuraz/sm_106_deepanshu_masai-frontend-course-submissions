var arr=[1,2,3,4,5,6,5,4,3,2,12,11,22,33,87]
var target=12;
var arr1=[]
function filterArrayGreaterThan(arr, target) {
  arr1 = arr.filter(function(element) {
    return element >= target
  })
  console.log(arr1)
}
filterArrayGreaterThan(arr, target)