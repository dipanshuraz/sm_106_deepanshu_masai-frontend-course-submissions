var arr1 = [3,5,1,9] 
var arr2 = [1,2,3,4,5,6,7]

function checkSubsetArray(arr1, arr2) {
  var count =0;
if(arr2.length>=arr1.length) {  
  for(var i=0;i<arr1.length;i++) {
    for(var j=0;j<arr2.length;j++) {
      
      if(arr2[j]==arr1[i])
      { 
        count++
      }  else {
        continue
      }
    }
}
  if(count==arr1.length) {
    return true
  } else {
    return false
  }
  }
}
console.log(checkSubsetArray(arr1, arr2))
