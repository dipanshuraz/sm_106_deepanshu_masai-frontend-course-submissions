var arr1 = [1,2,3,4,5,6,7,8,9,7,55,4,33,2,1]  
var uniqArr = []

function remDuplicates(arr1) {
  for(var i=0;i<arr1.length;i++) {
    // if(!(uniqArr.includes(arr1[i]))) {
    if( uniqArr.indexOf(arr1[i]) === -1) {
        uniqArr.push(arr1[i])
    }
  }
  return uniqArr
}
console.log(remDuplicates(arr1))
