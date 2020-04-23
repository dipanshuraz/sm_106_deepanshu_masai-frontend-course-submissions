var arr1=[3,4,5,6,7,8]
var arr2=[1,2,3,4,0,12,5]
var arr= []


function intersectionArray(arr1, arr2) {
  for(var i=0; i<arr1.length;i++) {
    for(var j=0;j<arr2.length;j++) {
      if(arr1[i]==arr2[j]) {
        arr.push(arr1[i])
      }
    }
    
  }
  console.log(arr)
}

intersectionArray(arr1, arr2)