var arr1 = [1,2,3,4,5,6,7] 
var arr2 = [3,5,1,4,12]

function checkSupsetArray(arr1, arr2) {
  var count =0;
if(arr1.length>=arr2.length) {  
  for(var i=0;i<arr1.length;i++) {
    for(var j=0;j<arr2.length;j++) {
      
      if(arr1[i]==arr2[j])
      { 
        count++
      }  else {
        continue
      }
    }
}
  if(count==arr2.length) {
    return true
  } else {
    return false
  }
  }
}
console.log(checkSupsetArray(arr1, arr2))
