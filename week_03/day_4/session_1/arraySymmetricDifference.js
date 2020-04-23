var arr1=[3,4,5,8,9]
var arr2=[1,2,3,4,0,12,1,2,0,2,4,5,6,7,8,11]

var symDiff = []
function arrSymDiff(arr1, arr2) {

  for (i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      symDiff.push(arr2[i]);
    }
  }
  for (i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      symDiff.push(arr1[i]);
    }
  }
  return symDiff
}

console.log(arrSymDiff(arr1, arr2))