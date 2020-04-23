var arr1 = ['a','b','c','d','e']
var arr2 = ['g','f','m']

function checkDisjoint(arr1, arr2) {
  for(var i=0;i<arr1.length;i++) {
  for(var j=0;j<arr2.length;j++)

    if(arr1[i]==arr2[j]) {
      return false
    }
  }
  return true
}
console.log(checkDisjoint(arr1,arr2))
