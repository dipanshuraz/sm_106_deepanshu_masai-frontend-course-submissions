var int = 123456789
var nArr = []
function reverseInt(int) {
  var int = int.toString()
  
  var intArr = int.split('').map(function(elem){
    return parseInt(elem)
  })
var size = intArr.length
  for(var i=size-1;i>=0;i--) {
      nArr.push(intArr[i])
  }
   nArr = Number(nArr.join(''))
  
   return nArr
}
console.log(reverseInt(int))
