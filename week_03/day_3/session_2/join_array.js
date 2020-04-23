var str = '';
var arr = ['Masai','School','Patna'];
var join = ' ';
function joinArray(arr, join) {
  for (var i = 0; i < arr.length; i++) {
    str += join + arr[i]
    
  }
  console.log(str)
  
}
joinArray(arr,join)