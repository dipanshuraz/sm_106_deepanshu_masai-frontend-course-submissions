var arr=[1,2,3,1,'a','g','a',5,2,7,'j',7,'z','a',2]
var find = '2'
var count = 0;
var occur = []
function findIndexOccurance(arr, find) {
  
  for(var i=0;i<arr.length;i++) {
         if(arr[i] == find) {
           occur.push(i)
    }
  }
  return occur
}
console.log(findIndexOccurance(arr, find))