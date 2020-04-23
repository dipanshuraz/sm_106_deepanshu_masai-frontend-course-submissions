var str = 'Masai School Patna'
var arr = [];
var splitChar = 'a'
function splitString(str, splitchar) {
  for(var i=0;str.length>i;i++)
  {
    if(str[i]==splitchar) {
      arr.push(' ')
    }
      else {
      arr.push(str[i])
    }
  }
  console.log(arr.join(''))
}
splitString(str,splitChar)
