var arr = [1,2,3,4,5,6,7,2,5,4,3,2,9]
var target = 2
var count=0;
function findCountDuplicates(arr, target) {
  for(var i=0;i<arr.length;i++) {
    if(arr[i] == target)  {
      count++
    }
  } return count
}
  
console.log(findCountDuplicates(arr, target))