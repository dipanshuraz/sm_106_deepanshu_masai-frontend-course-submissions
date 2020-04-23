var arr = [1,2,3,4,3,2,1,4,6,7,4,3,0]
var obj = {
  num : []
}
var uniq = []
var len = arr.length

function uniqObj(arr) {
  for(var i=0;i<len;i++) {
    if(!uniq.includes(arr[i])) {
      uniq.push(arr[i])
    }
  }
  for(var i=0;i<uniq.length;i++) {
     obj.num.push(uniq[i])
  }
  return obj
}

console.log(uniqObj(arr))