var arr1=[3,4,5,8]
var arr2=[1,2,3,4,0,12,5]
var arr= []

function arrayDiff(arr1, arr2) {

  for (i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      arr.push(arr2[i]);
    }
  }
  console.log(arr)
}
arrayDiff(arr1, arr2)