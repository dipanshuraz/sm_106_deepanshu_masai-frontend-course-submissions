var arr=[1,2,3,1,'a','g','a',5,7,'j',7,'z','a']
var find = 'j'
var count = 0;
function findPos(arr, find) {
  for(var i=0;i<arr.length;i++) {
    if(arr[i] == find) {
      return i
    } else {
      count++;
    }
    if(count==arr.length) {
      return -1
    }
  }
}
console.log(findPos(arr, find))