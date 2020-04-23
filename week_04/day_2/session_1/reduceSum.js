arr = [1, 2, 3, 4, 5]
var k=3
function reduceSum(arr, k) {
newArr = arr.filter(function(element){
    return element > k
  })
  //acc, element, index, array
  sum = newArr.reduce(function(element,index){
    return element + index
})
console.log(sum)
}
reduceSum(arr, k)