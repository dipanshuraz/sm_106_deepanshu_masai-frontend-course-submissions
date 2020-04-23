var arr1=[3,4,5,6,8]
var arr2=[1,9,2,3,8]
var cat = []
function unionArrays(arr1, arr2) {
    
  cat = cat.concat(arr1)

  for(var i =0;i<arr2.length;i++) {
    if(!arr1.includes(arr2[i])) {
      cat.push(arr2[i])
    }
  }
  return cat
}

console.log(unionArrays(arr1, arr2))
