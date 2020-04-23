var numArray = [1,2,3,4,5,6,7,8,9,0,11,2,3,3,4,2,1,2,1,3,21,3,2,24,3,4]
var sum=0;
function sumArray(numArray) {
  for(var i=numArray.length-1; i>=0;i--) {
    if(numArray[i]%2==0) {
      sum = sum + numArray[i]
    }
  }
  console.log(sum)
}
sumArray(numArray)
